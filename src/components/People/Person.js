import React, { Component } from 'react'

class Person extends Component {
  constructor() {
    super()
    this.state = {
      homeworld: '',
      species: ''
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
      this.setState({ homeworld: json.name })
      console.log(json);
    })
  }

  getSpecies(api) {
    fetch(api)
    .then(response => response.json())
    .then((json) => {
      this.setState({ species: json.name })
    })
  }

  render() {
    const { name, population, language } = this.props
    const { homeworld, species } = this.state

    return (
      <section className="cards-section">
        <div className="cards-wrapper">
          "HI"
        </div>
      </section>
    )
  }
}

export default Person