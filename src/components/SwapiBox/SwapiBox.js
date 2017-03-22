import React, { Component } from 'react';
import RandomQuote          from '../RandomQuote/RandomQuote'
import Buttons              from '../Buttons/Buttons'
import Cards                from '../Cards/Cards'

import './SwapiBox.css'

class SwapiBox extends Component {
  constructor() {
    super()
    this.state = {
      randomQuote: '',
    }
  }

  grabPeopleData() {
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

  grabSpeciesInfo(card) {
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

  grabPlanetData(){
    this.setState({peopleList: []})
    fetch('https://swapi.co/api/planets/')
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      this.setState({ planetInfo: json.results})
    })
  }

  componentDidMount() {
     fetch('https://swapi.co/api/films/')
    .then((response)=> {
      return response.json()
    })
    .then((json) => {
      const randomResult  = Math.random(json.results) * json.count
      const flooredResult = Math.floor(randomResult)
      const randomQuote   = json.results[flooredResult].opening_crawl
      this.setState({
        randomQuote: randomQuote
      })
    })
    console.log('did mount');
  }

  render() {
    return (
      <div className='wrapper'>
        <div className='random-quote'>
          <RandomQuote quote={ this.state.randomQuote }/>
          <Buttons
            peopleData={ () => this.grabPeopleData() }
            planetData={() => this.grabPlanetData() }
            />
        </div>
        <Cards data={ this.state.peopleList }/>
      </div>
    )
  }
}

export default SwapiBox