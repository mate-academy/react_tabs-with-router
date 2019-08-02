import React from 'react';
import {
  HashRouter, Route, Switch, NavLink,
} from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import TabsFolder from './TabsFolder';

const App = () => (

  <HashRouter>
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              exact
              className="link"
              activeClassName="active-link"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tabs"
              className="link"
              activeClassName="active-link"
            >
              Tabs
            </NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/tabs/:tabId?" component={TabsFolder} />
      </Switch>

    </div>
  </HashRouter>
);

export default App;
