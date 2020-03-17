import React, { FC } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import { Home } from '../components/Home';
import { Tabs } from '../components/Tabs';

import './App.css';


export const App: FC = () => (
  <>
    <header className="header">
      <h1>Tabs with router</h1>

      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink
              to="/"
              exact
              className="nav-link"
              activeClassName="nav-link--active"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/tabs"
              className="nav-link"
              activeClassName="nav-link--active"
            >
              Tabs
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>

    <hr />

    <div className="content">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tabs/:tabId?" component={Tabs} />
      </Switch>
    </div>
  </>
);
