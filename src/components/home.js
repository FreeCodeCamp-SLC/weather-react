import React, { Component } from 'react';

export class Home extends Component {

  render() {
    return (
      <div className="home">
        <h2>Enter a City and State</h2>
        <form>
          <input type="text" placeholder="Murray, UT">
          <button type="submit" onSubmit={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

export default Home;
