import React, { FC } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';

const App: FC = () => (
  <div className="container">
    <h1 className="title">Tabs with router</h1>
    <nav className="navbar is-warning">
      <NavLink
        className="navbar-item"
        to="/"
        exact
      >
        Home
      </NavLink>
      <NavLink
        className="navbar-item"
        to="/tabs"
      >
        Tabs
      </NavLink>
    </nav>

    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/tabs/:tabId?" component={TabsPage} />
    </Switch>
  </div>
);

export default App;
