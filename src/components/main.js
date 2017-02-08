import React, { Component } from 'react';
// import axios from 'axios';
import {connect} from 'react-redux';
import * as actions from '../actions/index'

class Main extends Component {

  // state = {
  //   isLoading: true,
  //   weatherInfo: {
  //     city: "Murray",
  //     temp: 50
  //   }
  // }

  componentDidMount() {
    this.props.getWeather()
  }

  render() {
    return (
      <div className="main">
        {(!this.props.data.isLoading) ?
          <div>
            <h2>{this.props.data.weatherInfo.name}</h2>
            <h1>{(this.props.data.weatherInfo.main.temp) ? this.props.data.weatherInfo.main.temp : 50}</h1>
            <img alt='weather-icon' src={'http://openweathermap.org/img/w/' + this.props.data.weatherInfo.weather[0].icon + '.png'} />
          </div>
           : <h1>Loading</h1>}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getWeather: () => {
      return dispatch(actions.getWeather())
    }
  }
}

const mapStateToProps = (state) => {
  return {
    data: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
