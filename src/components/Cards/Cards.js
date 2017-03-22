import React, { Component } from 'react';
import './Cards.css'
import Card from '../Card/Card'

const Cards = ({ peopleData, planetData }) => {
  if(!peopleData){
    return (
      <div></div>
    )
  }

  if (planetData === undefined) {return}
  if(planetData.length > 1){
    const renderPlanets = () => {
      return planetData.map((card, i) => {
        return(
          <div className='card' key={ i }>
            <Card planetInfo={ card } />
          </div>
        )
      })
    }
    return(
      <div>{ renderPlanets() }</div>
    )
  }

  if(peopleData) {
    const renderCard = () => {
      return peopleData.map((card, i) => {
        if(card.specieInfo === undefined){return}
        return(
          <div className='card' key={ i }>
            <Card
              cardInfo={ card }
              specieInfo={ card.specieInfo }
              />
          </div>
        )
      })
    }

    return (
      <section className="cards-section">
        <div className="cards-wrapper">
          { renderCard() }
        </div>
      </section>
    )
  }
}

export default Cards
