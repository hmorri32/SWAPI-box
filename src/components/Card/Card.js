import React, { Component } from 'react';
import './Card.css'

const Card = ({ cardInfo, specieInfo, planetInfo }) => {
  if(planetInfo){
    return(
      <div>
        <h3>{ planetInfo.name }</h3>
        <h4>Terrain: { planetInfo.terrain}</h4>
        <h4>Population: { planetInfo.population }</h4>
        <h4>Climate: { planetInfo.climate }</h4>
        {planetInfo.residentInfo ? <h3>Resident: {planetInfo.residentInfo.name}</h3> : null}
      </div>
    )
  }

  if(cardInfo && specieInfo){
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
}

export default Card
