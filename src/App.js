import React from 'react';
import './App.css';
import { Route, Switch, NavLink } from 'react-router-dom';
import Tabs from './Tabs';
import Home from './Home';

const App = () => (
  <div className="App">
    <nav>
      <ul className="panel">
        <li>
          <NavLink
            className="menuItem"
            activeClassName="selected"
            to="/"
            exact
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="menuItem"
            activeClassName="selected"
            to="/tabs"
          >
            Tabs
          </NavLink>
        </li>
      </ul>
    </nav>

    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/tabs/:tabId?" component={Tabs} />
    </Switch>
  </div>
);

export default App;
