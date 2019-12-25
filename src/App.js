import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import HomePage from './components/HomePage';
import TabsPage from './components/TabsPage';
import './App.css';

const App = () => (
  <div className="App">
    <NavLink
      to="/"
      exact
      className="nav-item"
      activeClassName="nav-item--active"
    >
      Home
    </NavLink>

    <NavLink
      to="/tabs"
      className="nav-item"
      activeClassName="nav-item--active"
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
