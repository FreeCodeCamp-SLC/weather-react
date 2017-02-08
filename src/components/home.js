import React, { Component } from 'react';
import * as actions from '../actions/index'
import {connect} from 'react-redux'

export class Home extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      formValue: ""
    }
  }

  // state = {
  //   formValue: ""
  // }

handleChange(event) {
  event.preventDefault()
  console.log(event.target.value)

  this.setState({formValue: event.target.value})
  console.log("state", this.state)
}

  handleSubmit(event) {
    event.preventDefault()
    console.log(this.state.formValue)
    // this.props.getWeather(event.)
  }

  render() {
    return (
      <div className="home">
        <h2>Enter a City and State</h2>
        <form>
          <input type="text" onChange={this.handleChange} placeholder="Murray, UT" />
          <input type="button" onClick={this.handleSubmit} value="Submit" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getWeather: (city) => {
      return dispatch(actions.getWeather(city))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    data: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
