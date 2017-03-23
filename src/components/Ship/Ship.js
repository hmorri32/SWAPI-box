import React from 'react'

const Ship = ({ name, model, crew, passengers, hyperdrive, clickFav }) => {
  return(
    <div>
      <h2>{ name }</h2>
      <h4>Model: { model }</h4>
      <h4>Crew: { crew }</h4>
      <h4>Passengers: { passengers }</h4>
      <h4>Hyperdrive Rating: { hyperdrive }</h4>
      <button
        className='fav'
        onClick={ () => clickFav(name) }>
        <img className='vader-btn' src={require('../People/vader.svg')} alt='vaderBtn' />
      </button>
    </div>
  )
}

export default Ship