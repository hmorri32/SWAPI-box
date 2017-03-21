import React, { Component } from 'react';

const Card = ({ cardInfo }) => {
  console.log(cardInfo);
  return (
    <div>
      <p>{ cardInfo.name }</p>
      <p>{ cardInfo.worldName }</p>
    </div>
  )
}

export default Card


//
// <h3> { card.name } </h3>
// <h4> { card.worldName } </h4>
// <h4> { card.planetInfo.population } </h4>
// <h4> { card.specieInfo.language } </h4>