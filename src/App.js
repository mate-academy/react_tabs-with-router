import React from 'react';
import './App.scss';
import { Route, Switch, NavLink } from 'react-router-dom';
import TabsPage from './components/TabsPage';
import HomePage from './components/HomePage';

const App = () => (
  <div className="App">
    <ul className="nav">
      <li>
        <NavLink
          className="nav__link"
          activeClassName="nav__link--active"
          to="/"
          exact
        >
            Home
        </NavLink>
      </li>

      <li>
        <NavLink
          className="nav__link"
          activeClassName="nav__link--active"
          to="/tabs"
        >
            Tabs
        </NavLink>
      </li>
    </ul>

    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/tabs" component={TabsPage} />
    </Switch>
  </div>
);

export default App;
