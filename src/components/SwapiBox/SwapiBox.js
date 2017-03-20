import React, { Component } from 'react';
import RandomQuote from '../RandomQuote/RandomQuote'
import Buttons from '../Buttons/Buttons'

import './SwapiBox.css'

class SwapiBox extends Component {
  constructor() {
    super()
    this.state ={
      randomQuote: ''
    }
  }

  grabPeopleData() {
    fetch('https://swapi.co/api/people/')
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      console.log('SUHHH');
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
            <Buttons  />
        </div>
      </div>
    )
  }
}

export default SwapiBox