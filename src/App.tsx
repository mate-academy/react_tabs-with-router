import React, { FC } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { TabPage } from './components/TabPage';
import './App.css';

const App: FC = () => (
  <div className="container">
    <h1 className="title">Tabs with router</h1>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/"
            exact
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/tabs"
          >
            Tabs
          </NavLink>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/tabs/:tabId?" component={TabPage} />
    </Switch>
  </div>
);

export default App;
