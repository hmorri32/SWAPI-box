import React from 'react';
import './Buttons.css'

const Buttons = ({ peopleData, planetData, shipData }) => {
  return (
    <div className='buttons'>
      <button onClick={ peopleData } className='button'>PEOPLE</button>
      <button onClick={ planetData } className='button'>PLANETS</button>
      <button onClick={ shipData } className='button'>SHIPS</button>
    </div>
  )
}

export default Buttons