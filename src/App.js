import React from 'react';
import './App.css';
import { HashRouter, Route, Switch, NavLink } from 'react-router-dom';
import HomePage from './HomePage';
import TabsPage from './TabsPage';

const App = () => (
  <div className="App">
    <HashRouter>
      <NavLink to="/" exact>HomePage</NavLink>
      <NavLink to="/tabs">TabsPage</NavLink>

      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/tabs/:key?" component={TabsPage} />
      </Switch>
    </HashRouter>
  </div>
);

export default App;
