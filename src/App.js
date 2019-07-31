/* eslint-disable */
import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import Tabs from './components/Tabs';
import Home from './components/Home';
import './App.css';

class App extends React.Component {
  render() {
    return (
        <div className="App">
          <div className="main-link-container">
            <NavLink
              to="/"
              exact
              className="main-link"
              activeClassName="main-link__active"
            >
              Home
            </NavLink>
            <NavLink
              to="/Tabs"
              className="main-link"
              activeClassName="main-link__active"
            >
              Tabs
            </NavLink>
          </div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Tabs" component={Tabs} />
          </Switch>
        </div>
    );
  }
}

export default App;
