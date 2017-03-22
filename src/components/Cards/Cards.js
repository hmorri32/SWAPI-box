import React, { Component } from 'react';
import './Cards.css'
import Card from '../Card/Card'

const Cards = ({ data }) => {
  if(!data){
    return (
      <div></div>
    )
  }

  const renderCards = () => {

    return data.map((card, i) => {
      return (
        <div className='cards' key={ i }>
          <h3> { card.name } </h3>
          <h4> { card.worldName } </h4>
          <h4> { card.planetInfo.population } </h4>
          <h4> { card.specieInfo.language } </h4>
        </div>
      )
    })
  }

  const renderCard = () => {
    return data.map((card, i) => {
      if(card.specieInfo === undefined){return}
      console.log(card.specieInfo);
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

export default Cards
