import React from 'react';
import './RandomQuote.css'

const RandomQuote = ({ quote }) => {
  return (
    <div id="wrapper">
      <div id="quote">
        <p>{ quote }</p>
      </div>
    </div>
  )
}

export default RandomQuote