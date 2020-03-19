import React, { FC } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';
import Tabs from './components/Tabs';

import './App.css';

const App: FC = () => (
  <Router>
    <nav className="nav">
      <NavLink
        to="/"
        className="nav__item"
        activeClassName="nav__item--active"
        exact
      >
        Home
      </NavLink>
      <NavLink
        to="/tabs"
        className="nav__item"
        activeClassName="nav__item--active"
        exact
      >
        Tabs
      </NavLink>
    </nav>
    <Switch>
      <Route
        path="/"
        render={() => <h1>Homepage</h1>}
        exact
      />
      <Route path="/tabs/:tabsId?" component={Tabs} exact />
    </Switch>
  </Router>
);

export default App;
