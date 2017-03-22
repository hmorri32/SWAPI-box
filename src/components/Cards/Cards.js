import React, { Component } from 'react';
import './Cards.css'
import Card   from '../Card/Card'
import Person from '../People/Person.js'
import Planet from '../Planet/Planet.js'


const getCards = (selectedContent, category) => {
  if(category==='people') {
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
}

const Cards = ({ selectedContent, category }) => {

  return (
    <div>
      { getCards(selectedContent, category) }
    </div>
  )

  //
  // if(shipData !== undefined && shipData.length > 1){
  //   const renderShips = () => {
  //     return shipData.map((card, i) => {
  //       return(
  //         <div className='card' key={ i }>
  //           <Card shipInfo={ card } />
  //         </div>
  //       )
  //     })
  //   }
  //   return (
  //     <div>{ renderShips() }</div>
  //   )
  // }
  //
  // if(planetData !== undefined && planetData.length > 1){
  //   const renderPlanets = () => {
  //     return planetData.map((card, i) => {
  //       return(
  //         <div className='card' key={ i }>
  //           <Card planetInfo={ card } />
  //         </div>
  //       )
  //     })
  //   }
  //   return(
  //     <div>{ renderPlanets() }</div>
  //   )
  // }
}

export default Cards
