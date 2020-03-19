import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import { Home } from './components/Home';
import { Tabs } from './components/Tabs';
import './App.css';

const App = () => (
  <div className="App">
    <h1>Tabs with router</h1>
    <nav>
      <ul className="lists">
        <li className="lists__item">
          <NavLink
            to="/"
            exact
            className="lists__link"
          >
            Home
          </NavLink>
        </li>
        <li className="lists__item">
          <NavLink
            to="/tabs"
            className="lists__link"
          >
            Tabs
          </NavLink>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/tabs" component={Tabs} />
    </Switch>
  </div>
);

export default App;
