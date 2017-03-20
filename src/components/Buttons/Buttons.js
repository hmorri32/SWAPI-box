import React from 'react';
import './Buttons.css'

const Buttons = ({ handleClick }) => {
  return (
    <div className='buttons'>
      <button className='button'>PEOPLE</button>
      <button className='button'>PLANET</button>
      <button className='button'>VEHICLES</button>
    </div>
  )
}

export default Buttons