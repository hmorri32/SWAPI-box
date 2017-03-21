import React, { Component } from 'react';
import RandomQuote from '../RandomQuote/RandomQuote'
import Buttons from '../Buttons/Buttons'
import Cards from '../Cards/Cards'

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
      const peopleList = json.results
      this.setState({ peopleList: peopleList})
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
            <Buttons peopleData={ () => this.grabPeopleData() } />
        </div>
        <Cards data={ this.state.peopleList }/>
      </div>
    )
  }
}

export default SwapiBox