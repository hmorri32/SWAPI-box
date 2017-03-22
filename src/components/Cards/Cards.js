import React  from 'react';
import Person from '../People/Person.js'
import Planet from '../Planet/Planet.js'
import Ship   from '../Ship/Ship.js'

import './Cards.css'

const getCards = (selectedContent, category) => {
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
            />
        </div>
      )
    })
  }
}

const Cards = ({ selectedContent, category }) => {
  return (
    <div>
      { getCards(selectedContent, category) }
    </div>
  )
}

export default Cards
