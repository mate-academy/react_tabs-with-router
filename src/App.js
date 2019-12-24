import React from 'react';
import './App.scss';
import { Route, Switch, NavLink } from 'react-router-dom';
import HomePage from './HomePage';
import TabsPage from './TabsPage';

const App = () => (
  <div className="App">
    <NavLink
      to="/"
      exact
      className="nav__item"
      activeClassName="nav__item_active"
    >
      Home
    </NavLink>

    <NavLink
      to="/tabs"
      className="nav__item"
      activeClassName="nav__item_active"
    >
      Tabs
    </NavLink>

    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/tabs" component={TabsPage} />
    </Switch>
  </div>
);

export default App;
