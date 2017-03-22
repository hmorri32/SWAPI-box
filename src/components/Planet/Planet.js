import React, { Component } from 'react'

class Planet extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {

    return (
      <div>IM A PLANET</div>
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