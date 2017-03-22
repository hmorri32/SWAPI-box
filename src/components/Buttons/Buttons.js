import React from 'react';
import './Buttons.css'

const Buttons = ({ peopleData, planetData }) => {
  return (
    <div className='buttons'>
      <button onClick={ peopleData } className='button'>PEOPLE</button>
      <button onClick={ planetData } className='button'>PLANETS</button>
      <button className='button'>VEHICLES</button>
    </div>
  )
}

export default Buttons