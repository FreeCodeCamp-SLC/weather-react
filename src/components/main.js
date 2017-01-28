import React, { Component } from 'react';
import axios from 'axios';

export class Main extends Component {

  state = {
    isLoading: true,
    weatherInfo: [{
      city: "Murray",
      temp: 50
    }]
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="home">
        {(this.state.isLoading) ?
          <div>
            <h2>{this.state.weatherInfo[0].city}</h2>
            <h1>{this.state.weatherInfo[0].temp}</h1>
          </div>
           : <h1>'City Name'</h1>}
      </div>
    )
  }
}

export default Main;
