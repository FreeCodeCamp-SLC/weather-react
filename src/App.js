import React, { Component } from 'react';
import Header from './components/header';
import Main from './components/main';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        {this.props.children}
      </div>
    );
  }
}
// <Main />
export default App;
