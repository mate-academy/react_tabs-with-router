import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import HomePage from './HomePage';
import TabsPage from './TabsPage';
import './App.scss';

const App = () => (
  <div className="App">
    <BrowserRouter>
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
    </BrowserRouter>
  </div>
);

export default App;
