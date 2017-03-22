
export default class Api {

  getApiInfo(){
    fetch('https://swapi.co/api/people/')
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      const newState = json.results.map((card) => {
        this.grabWorldInfo(card)
        this.grabSpeciesInfo(card)
        return card;
      })
      this.setState({ peopleList: newState })
    }).catch(e => {
      return
    })
  }

  grabWorldInfo(card) {
    fetch(card.homeworld)
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      const people = this.state.peopleList.map(person => {
        if(person.name === card.name){
          person.worldName = getNameFromApi(json)
          person.planetInfo = getPlanetInfo(json)
        }
        return person;
      })
      this.setState({ peopleList: people })
    }).catch(e => {
      return
    })
    const getNameFromApi = (json) => {
      if(!json){return}
      return json.name
    }
    const getPlanetInfo = (json) => {
      if(!json){return}
      return json
    }
  }

  grabSpeciesInfo (card) {
    fetch(card.species)
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      const people = this.state.peopleList.map(person => {
        if(person.name === card.name) {
          person.specieInfo = getSpecies(json)
        }
        return person
      })
      this.setState({ peopleList: people})
    }).catch(e => {
      return
    })
    const getSpecies = (json) => {
      if(!json){return}
      return json
    }
  }
}






