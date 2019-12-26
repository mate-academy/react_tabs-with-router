import React from 'react';
import {
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import HomePage from './HomePage';
import TabsPage from './TabsPage';
import './App.css';

const App = () => (
  <div className="App">
    <NavLink
      to="/"
      exact
      className="nav-item"
      activeClassName="nav-item_active"
    >
      Home
    </NavLink>
    <NavLink
      to="/tabs"
      exact
      className="nav-item"
      activeClassName="nav-item_active"
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
