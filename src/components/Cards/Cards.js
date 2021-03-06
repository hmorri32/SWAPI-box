import React  from 'react';
import Person from '../People/Person.js'
import Planet from '../Planet/Planet.js'
import Ship   from '../Ship/Ship.js'
import './Cards.css'

const getCards = (selectedContent, category, clickFav, favorites) => {

  if(category === 'people') {
    return selectedContent.map((card, i) => {
      return (
        <div className='card' key={ i }>
          <Person
            name={ card.name }
            homeworld={ card.homeworld }
            species={ card.species }
            population={ card.population }
            language={ card.language }
            clickFav={ clickFav }
            />
        </div>
      )
    })
  }

  if(category === 'planet') {
    return selectedContent.map((card, i) => {
      return (
        <div className='card' key={ i }>
          <Planet
            name={ card.name }
            terrain={ card.terrain }
            climate={ card.climate }
            population={ card.population }
            residents={ card.residents }
            clickFav={ clickFav }
            />
        </div>
      )
    })
  }

  if(category === 'ship') {
    return selectedContent.map((card, i) => {
      return (
        <div className='card' key={ i }>
          <Ship
            name={ card.name }
            model={ card.model }
            crew={ card.crew }
            passengers={ card.passengers }
            hyperdrive={ card.hyperdrive_rating }
            clickFav={ clickFav }
            />
        </div>
      )
    })
  }

  if(category === 'favorites'){
    return favorites.map((card, i) => {
      if(card.skin_color) {
        return(
          <div className='card' key={ i }>
            <Person
              name={ card.name }
              homeworld={ card.homeworld }
              species={ card.species }
              population={ card.population }
              language={ card.language }
              clickFav={ clickFav }
              />
          </div>
        )
      }
      if(card.climate) {
        return(
          <div className='card' key={ i }>
            <Planet
              name={ card.name }
              terrain={ card.terrain }
              climate={ card.climate }
              population={ card.population }
              residents={ card.residents }
              clickFav={ clickFav }
              />
          </div>
        )
      }
      if(card.hyperdrive_rating) {
        return (
          <div className='card' key={ i }>
            <Ship
              name={ card.name }
              model={ card.model }
              crew={ card.crew }
              passengers={ card.passengers }
              hyperdrive={ card.hyperdrive_rating }
              clickFav={ clickFav }
              />
          </div>
        )
      }
    })
  }
}

const Cards = ({ selectedContent, category, clickFav, favorites }) => {
  return (
    <div className='cards-container'>
      { getCards(selectedContent, category, clickFav, favorites) }
    </div>
  )
}

export default Cards
