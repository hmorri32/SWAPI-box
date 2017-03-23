import React, { Component } from 'react'
import './Person.css'

class Person extends Component {
  constructor() {
    super()
    this.state = {
      homeworld: '',
      species: '',
      population: '',
      language: ''
    }
  }

  componentDidMount() {
    this.getHomeWorld(this.props.homeworld)
    this.getSpecies(this.props.species)
  }

  getHomeWorld(api) {
    fetch(api)
    .then(response => response.json())
    .then((json) => {
      this.setState({ homeworld: json.name, population: json.population })
    })
  }

  getSpecies(api) {
    fetch(api)
    .then(response => response.json())
    .then((json) => {
      this.setState({ species: json.name, language: json.language })
    })
  }

  render() {
    const { name, clickFav } = this.props
    const { homeworld, species, population, language } = this.state

    return (
      <section className="cards-section" >
        <div className="cards-wrapper">
          <div>
            <h2>{ name }</h2>
            <h4>Species: { species }</h4>
            <h4>Language: { language } </h4>
            <h4>Homeworld: { homeworld }</h4>
            <h4>Population: { population } </h4>
            <button
              className='fav'
              onClick={ () => clickFav(name) }>
              <img className='vader-btn' src={require('./vader.svg')} />
            </button>
          </div>
        </div>
      </section>
    )
  }
}

export default Person