import React, { Component } from 'react';
import axios from 'axios';

export class Main extends Component {

  state = {
    isLoading: true,
    weatherInfo: {
      city: "Murray",
      temp: 50
    }
  }

  componentDidMount() {
    return axios.get('http://ipinfo.io').then(ipResponse => {
      console.log(ipResponse.data.postal)
      return axios.get('http://api.openweathermap.org/data/2.5/weather?zip=' + ipResponse.data.postal + '&units=imperial&APPID=a62cd1cab307b87f29523ee6112488f5').then(weatherResponse => {
        console.log(weatherResponse)
        this.setState({
          isLoading: false,
          weatherInfo: weatherResponse.data
        })
      })
    })
  }

  render() {
    return (
      <div className="main">
        {(!this.state.isLoading) ?
          <div>
            <h2>{this.state.weatherInfo.name}</h2>
            <h1>{this.state.weatherInfo.main.temp}</h1>
            <img alt='weather-icon' src={'http://openweathermap.org/img/w/' + this.state.weatherInfo.weather[0].icon + '.png'} />
          </div>
           : <h1>Loading</h1>}

      </div>
    )
  }
}

export default Main;
