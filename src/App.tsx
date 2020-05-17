import React from 'react';
import {
  BrowserRouter,
  Route,
  NavLink,
} from 'react-router-dom';

import './App.scss';
import { HomePage } from './components/HomePage';
import { Tabs } from './components/Tabs';

const App = () => (
  <BrowserRouter>
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink
            to="/"
            className="nav__link"
            activeClassName="nav__link--active"
          >
            Home Page
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tabs"
            className="nav__link"
            activeClassName="nav__link--active"
          >
            Tabs
          </NavLink>
        </li>
      </ul>
    </nav>

    <Route path="/" exact component={HomePage} />
    <Route path="/tabs/:id?" component={Tabs} />
  </BrowserRouter>
);

export default App;
