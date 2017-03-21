import React, { Component } from 'react';

const Card = ({ cardInfo, specieInfo }) => {
  console.log(specieInfo);
  return (
    <div>
      <h3>{ cardInfo.name }</h3>
      <h4>{ cardInfo.worldName }</h4>
      <h4>{ specieInfo.name }</h4>
    </div>
  )
}

export default Card


//
// <h3> { card.name } </h3>
// <h4> { card.worldName } </h4>
// <h4> { card.planetInfo.population } </h4>
// <h4> { card.specieInfo.language } </h4>