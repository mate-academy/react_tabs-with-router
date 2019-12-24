import React from 'react';
import './App.css';
import { Switch, Route, NavLink } from 'react-router-dom';

import HomePage from './HomePage';
import TabsPage from './TabsPage';

const App = () => (
  <div className="App">
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__link">
          <NavLink to="/" exact>Home</NavLink>
        </li>
        <li className="navbar__link">
          <NavLink to="/tabs">Tabs</NavLink>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/tabs" component={TabsPage} />
    </Switch>
  </div>
);

export default App;
