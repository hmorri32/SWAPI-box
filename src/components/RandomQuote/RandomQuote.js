import React, { Component } from 'react';
import './RandomQuote.css'

const RandomQuote = ({ quote }) => {
  return (
    <div id="titles">
      <div id="titlecontent">

        <p>{ quote }</p>

      </div>

    </div>

  )
}

export default RandomQuote



