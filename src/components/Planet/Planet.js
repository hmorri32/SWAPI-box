import React, { Component } from 'react'

class Planet extends Component {
  constructor() {
    super()
    this.state = {
      residents: []
    }
  }

  componentDidMount() {
    this.getResidents(this.props.residents)
  }

  getResidents(api) {
    api.map(resident => {
      fetch(resident)
      .then(response => response.json())
      .then((json)=> {
        this.state.residents.push(json.name)
        this.setState({ residents: this.state.residents })
      })
    })
  }

  render() {
    const { name, terrain, climate, population } = this.props
    const { residents } = this.state

    return (
      <div>
        <h2>{ name }</h2>
        <h4>Terrain: { terrain}</h4>
        <h4>Population: { population }</h4>
        <h4>Climate: { climate }</h4>
        { residents.length > 0 ? <h4>Residents: { residents.join(', ') }</h4> : null }
        <button className='fav'>
          <img className='vader-btn' src={require('../People/vader.svg')} />
        </button>
      </div>
    )
  }
}


export default Planet