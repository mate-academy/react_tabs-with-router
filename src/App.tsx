import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import TabsPage from './components/TabsPage';
import HomePage from './components/HomePage';
import './App.scss';

const App = () => (
  <div className="header">
    <div className="ui brown three item inverted menu">
      <NavLink
        className="item"
        activeClassName="active"
        to="/"
        exact
      >
        Home
      </NavLink>
      <NavLink
        className="item"
        activeClassName="active"
        to="/tabs"
      >
        Posts
      </NavLink>
    </div>

    <h1 className="ui brown header header__title">React tabs with router</h1>

    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/tabs" component={TabsPage} />
    </Switch>
  </div>
);

export default App;
