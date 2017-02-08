import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './App';
import Home from './components/home'
// import './index.css';

const Routes = (props) => (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
);

export default Routes;
