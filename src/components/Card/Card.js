import React, { Component } from 'react';
import './Card.css'

const Card = ({ cardInfo, specieInfo }) => {
  return (
    <div>
      <h3>{ cardInfo.name }</h3>
      <h4>Species: { specieInfo.name }</h4>
      <h4>Homeworld: { cardInfo.worldName }</h4>
      <h4>Language: { specieInfo.language } </h4>
      <h4>Population: { cardInfo.planetInfo.population } </h4>
    </div>
  )
}

export default Card
