import React from 'react';
import './App.css';
import { Route, Switch, NavLink } from 'react-router-dom';

import TabsPage from './components/TabsPage';
import Home from './components/Home';

const App = () => (
  <div className="App">
    <nav>
      <ul className="navigation">
        <li>
          <NavLink
            to="/"
            exact
            className="navigation__link"
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/tabs"
            className="navigation__link"
          >
            Tabs
          </NavLink>
        </li>
      </ul>
    </nav>

    <Switch>
      <Route
        path="/"
        exact
        component={Home}
      />

      <Route
        path="/tabs/:tabId?"
        exact
        component={TabsPage}
      />
    </Switch>
  </div>
);

export default App;
