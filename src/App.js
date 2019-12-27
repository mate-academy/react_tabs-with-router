import React from 'react';
import './App.css';
import { Route, Switch, NavLink } from 'react-router-dom';
import TabsPage from './TabsPage';
import HomePage from './HomePage';

const App = () => (
  <div className="App">
    <div>

      <nav>
        <ul>
          <li>
            <NavLink
              className="button"
              to="/"
              exact
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="button"
              to="/tabs"
            >
              Tabs
            </NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/tabs" component={TabsPage} />
      </Switch>

    </div>
  </div>
);

export default App;
