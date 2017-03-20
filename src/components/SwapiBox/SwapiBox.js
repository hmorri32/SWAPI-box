import React, { Component } from 'react';


class SwapiBox extends Component {
  constructor() {
    super()
    this.state ={
      
    }
  }

  componentDidMount() {
     fetch('https://swapi.co/api/films/')
    .then((response)=> {
      return response.json()
    })
    .then((json) => {
      const data = json.results[0].opening_crawl
      console.log(data);
    })
    console.log('did mount');
  }

  render() {
    return (
      <div>{  }</div>
    )
  }
}

export default SwapiBox