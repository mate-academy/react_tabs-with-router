import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import TabsPage from './TabsPage';

const App = () => (
  <div className="App">
    <nav>
      <NavLink
        to="/"
        exact
        className="nav__link"
        activeClassName="nav__link--active"
      >
        Home
      </NavLink>
      <NavLink
        to="/tabs"
        className="nav__link"
        activeClassName="nav__link--active"
      >
        Tabs
      </NavLink>
    </nav>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route
        path="/tabs"
        component={TabsPage}
      />
    </Switch>
  </div>
);

export default App;
