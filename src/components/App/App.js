import React, { Component } from 'react';
import './App.css';
import SwapiBox from '../SwapiBox/SwapiBox'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>SWAPI  BOX</h2>
        </div>
        <SwapiBox source="https://swapi.co/api/" />
      </div>
    );
  }
}

export default App;
