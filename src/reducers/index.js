import * as actions from '../actions/index'

const initialState = {
  isLoading: true,
  weatherInfo: {
    city: "Murray",
    temp: 50
  }
}

export const weatherReducer = (state=initialState, action) => {
  if (action.type === actions.UPDATE_WEATHER) {
    return Object.assign({}, state, {isLoading: false, weatherInfo: action.weatherData})
  // } else if (action.type === actions.SET_TEXT) {
  //   return Object.assign({}, state, {loadText: action.text})
  }
  return state
}
