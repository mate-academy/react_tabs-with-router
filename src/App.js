import React from 'react';
import { HashRouter, Route, Switch, NavLink } from 'react-router-dom';
import HomePage from './HomePage';
import TabsPage from './TabsPage';
import './App.scss';

const App = () => (
  <div className="App">
    <HashRouter>
      <NavLink
        to="/"
        exact
        className="link"
        activeClassName="link--active"
      >
        Home
      </NavLink>

      <NavLink
        to="/tabs"
        className="link"
        activeClassName="link--active"
      >
        Tabs
      </NavLink>

      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/tabs" component={TabsPage} />
      </Switch>
    </HashRouter>
  </div>
);

export default App;
