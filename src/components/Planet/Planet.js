import React, { Component } from 'react'

class Planet extends Component {
  constructor() {
    super()
    this.state = {
      residents: ''
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
        console.log(json);
        this.setState({ residents: json.name})
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
        {residents ? <h4>Resident: { residents }</h4> : null}
      </div>
    )
  }
}



export default Planet



  //
  // grabResidentData(card) {
  //
  //   card.residents.map(resident => {
  //     fetch(resident)
  //     .then((response) => {
  //       return response.json()
  //     })
  //     .then((json) => {
  //
  //       const planet = this.state.planetInfo.map(planet => {
  //         if(planet.name === card.name) {
  //
  //           planet.residentInfo = getPlanets(json)
  //         }
  //         return planet
  //       })
  //       this.setState({ planetInfo: planet })
  //     })
  //     .catch(e => {
  //       return
  //     })
  //     const getPlanets = (json) => {
  //       if(!json){return}
  //       return json
  //     }
  //   })
  // }