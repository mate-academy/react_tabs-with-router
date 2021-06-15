import React from 'react';

import './App.scss';

import {
  NavLink,
  Switch,
  Route,
  HashRouter as Router,
  Redirect,
} from 'react-router-dom';

import { TabsPage } from './components/TabsPage';
import { HomePage } from './components/HomePage';

const App = () => (
  <div className="App">
    <Router>
      <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/"
              exact
            >
              <i className="bi-house-fill" />
              {' '}
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/tabs"
            >
              Tabs
            </NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route
          path="/tabs/:tabId?"
          component={TabsPage}
        />
        <Route
          path='/'
          exact
          component={HomePage}
        />
        <Redirect
          path='/home'
          to='/'
        />
      </Switch>
    </Router>
  </div>
);

export default App;
