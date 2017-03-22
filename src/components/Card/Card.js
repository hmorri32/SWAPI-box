import React, { Component } from 'react';
import './Card.css'

const Card = ({ cardInfo, specieInfo, planetInfo, shipInfo }) => {

  if(shipInfo){
    return (
      <div>
        <h2>{ shipInfo.name }</h2>
        <h4>Model: { shipInfo.model }</h4>
        <h4>Crew: { shipInfo.crew }</h4>
        <h4>Passengers: { shipInfo.passengers }</h4>
        <h4>Hyperdrive Rating: { shipInfo.hyperdrive_rating }</h4>
      </div>
    )
  }

  if(planetInfo){
    return(
      <div>
        <h2>{ planetInfo.name }</h2>
        <h4>Terrain: { planetInfo.terrain}</h4>
        <h4>Population: { planetInfo.population }</h4>
        <h4>Climate: { planetInfo.climate }</h4>
        {planetInfo.residentInfo ? <h4>Resident: {planetInfo.residentInfo.name}</h4> : null}
      </div>
    )
  }

  if(cardInfo && specieInfo){
    return (
      <div>
        <h2>{ cardInfo.name }</h2>
        <h4>Species: { specieInfo.name }</h4>
        <h4>Language: { specieInfo.language } </h4>
        <h4>Homeworld: { cardInfo.worldName }</h4>
        <h4>Population: { cardInfo.planetInfo.population } </h4>
      </div>
    )
  }
}

export default Card
