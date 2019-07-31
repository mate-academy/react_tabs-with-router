/* eslint-disable */1
import React from 'react';
import { BrowserRouter, NavLink, Route, Switch} from 'react-router-dom';
import './App.css';
import Tabs from './components/Tabs';
import Home from './components/Home';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
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
      </BrowserRouter>
    );
  }
}

export default App;
