import React from 'react';
import './Buttons.css'

const Buttons = ({ peopleData, planetData, shipData, favorites }) => {
  return (
    <div className='buttons'>
      <button onClick={ peopleData } className='button'>PEOPLE</button>
      <button onClick={ planetData } className='button'>PLANETS</button>
      <button onClick={ shipData }   className='button'>SHIPS</button>
      <button onClick={ favorites }  className='button'>FAVORITES</button>
    </div>
  )
}

export default Buttons