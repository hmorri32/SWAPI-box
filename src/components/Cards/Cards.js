import React, { Component } from 'react';
import './Cards.css'
import Card from '../Card/Card'

const Cards = ({ data }) => {
  if(!data){
    return (
      <div></div>
    )
  }

  const renderCard = () => {
    return data.map((card, i) => {
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

export default Cards
