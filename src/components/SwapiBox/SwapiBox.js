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
      favorites:[]
    }
  }

  componentDidMount() {
     fetch('https://swapi.co/api/films/')
    .then(response => response.json())
    .then((json) => {
      const randomResult  = Math.random(json.results) * json.count
      const flooredResult = Math.floor(randomResult)
      const randomQuote   = json.results[flooredResult].opening_crawl
      this.setState({ randomQuote: randomQuote })
    })
  }

  grabPeopleData() {
    fetch('https://swapi.co/api/people/')
    .then(response => response.json())
    .then(json => this.setState({ selectedContent: json.results, category: 'people' }))
    .catch(e => console.log(e))
  }

  grabPlanetData() {
    fetch('https://swapi.co/api/planets/')
    .then(response => response.json())
    .then(json => this.setState({ selectedContent: json.results, category: 'planet' }))
    .catch(e => console.log(e));
  }

  grabStarShipData() {
    fetch('http://swapi.co/api/starships/')
    .then(response => response.json())
    .then(json => this.setState({ selectedContent: json.results, category: 'ship'}))
    .catch(e => console.log(e))
  }

  addFavorite(name) {
    const fav    = this.state.selectedContent.filter(card => card.name === name)
    const newFav = this.state.favorites.concat(fav)
    this.setState({ favorites: newFav })
  }

  removeFavorite(name) {
    const card = this.state.favorites.findIndex(card => card.name === name)
    this.state.favorites.splice(card, 1)
    this.setState({ favorites: this.state.favorites})
  }

  toggleFavorites(name) {
    if(!this.state.favorites.length) {
      this.addFavorite(name)
    }
    this.state.favorites.map(card => {
      return card.name === name ? this.removeFavorite(name) : this.addFavorite(name)
    })
  }
  setCategoryForFav() {
    this.setState({ category: 'favorites'})
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
            favorites={ () => this.setCategoryForFav() }
            />
        </div>
        <Cards
          selectedContent={ this.state.selectedContent }
          category={ this.state.category }
          clickFav={ (name) => this.toggleFavorites(name) }
          favorites={ this.state.favorites }
           />
      </div>
    )
  }
}

export default SwapiBox