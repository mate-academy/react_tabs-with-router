import React from 'react';
import './App.css';

import {
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

import HomePage from './components/HomePage';
import TabsPage from './components/TabsPags';

const App = () => (
  <div className="App">
    <Route>
      <ul className="nav">
        <li className="nav__item">
          <NavLink
            to="/"
            className="nav__link"
            activeClassName="nav__link--active"
            exact
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tabs"
            className="nav__link"
            activeClassName="nav__link--active"
          >
            Tabs Page
          </NavLink>
        </li>
      </ul>
    </Route>

    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/tabs" component={TabsPage} />
    </Switch>
  </div>
);

export default App;
