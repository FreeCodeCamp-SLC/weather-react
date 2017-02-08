import axios from 'axios'

export const UPDATE_WEATHER = 'UPDATE_WEATHER'
export const updateWeatherState = (weatherData) => ({
  type: UPDATE_WEATHER,
  weatherData
})

export const getWeather = (city) => {
  return dispatch => {
    // return axios.get('http://ipinfo.io').then(ipResponse => {
    //   console.log(ipResponse.data.postal)
      return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&type=accurate&units=imperial&APPID=a62cd1cab307b87f29523ee6112488f5').then(weatherResponse => {
        console.log(weatherResponse)
        dispatch(updateWeatherState(weatherResponse.data))
      })
    // })
  }
}
