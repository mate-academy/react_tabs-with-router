import React from 'react';
import { NavLink } from 'react-router-dom';

import 'bulma';
import './MainNavigation.scss';

export const MainNavigation = () => (
  <nav className="navbar">
    <NavLink
      to="/"
      className="navbar-item is-tab"
      activeClassName="is-active"
      exact
    >
      Home
    </NavLink>
    <NavLink
      to="/tabs"
      className="navbar-item is-tab"
      activeClassName="is-active"
      exact
    >
      Tabs
    </NavLink>
  </nav>
);
