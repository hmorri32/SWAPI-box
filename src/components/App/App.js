import React, { Component } from 'react';
import SwapiBox from '../SwapiBox/SwapiBox';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2 className="swapi-header">SWAPI  BOX</h2>
        </div>
        <SwapiBox />
      </div>
    );
  }
}

export default App;
