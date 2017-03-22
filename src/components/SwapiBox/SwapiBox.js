import React, { Component } from 'react';
import RandomQuote          from '../RandomQuote/RandomQuote'
import Buttons              from '../Buttons/Buttons'
import Cards                from '../Cards/Cards'

import './SwapiBox.css'

class SwapiBox extends Component {
  constructor() {
    super()
    this.state = {
      category: '',
      selectedContent: '',
      randomQuote: '',
    }
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
      this.setState({ randomQuote: randomQuote })
    })
  }

  grabPeopleData() {
    console.log('grab people data');
    fetch('https://swapi.co/api/people/')
    .then(response => response.json())
    .then(json => this.setState({ selectedContent: json.results, category: 'people' }))
    .catch(e => console.log(e))
  }

  grabPlanetData() {
    console.log('grab planet data');
    fetch('https://swapi.co/api/planets/')
    .then(response => response.json())
    .then(json => this.setState({ selectedContent: json.results, category: 'planet' }))
    .catch(e => console.log(e));
  }

  grabStarShipData() {
    console.log('grab ship data ');
    fetch('http://swapi.co/api/starships/')
    .then(response => response.json())
    .then(json => this.setState({ selectedContent: json.results, category: 'ship'}))
    .catch(e => console.log(e))
  }

  render() {
    return (
      <div className='wrapper'>
        <div className='random-quote'>
          <RandomQuote
            quote={ this.state.randomQuote }
            />
          <Buttons
            peopleData={ () => this.grabPeopleData() }
            planetData={ () => this.grabPlanetData() }
            shipData={ () => this.grabStarShipData() }
            />
        </div>
        <Cards selectedContent={ this.state.selectedContent } category={ this.state.category } />
      </div>
    )
  }
}

export default SwapiBox