import React from 'react';
import { NavLink } from 'react-router-dom';

export const MainNavigation = () => (
  <nav className="navbar">
    <NavLink
      to="/"
      exact
      className="navbar-item is-tab"
      activeClassName="is-active"
    >
      Home page
    </NavLink>

    <NavLink
      to="/tabs"
      className="navbar-item is-tab"
      activeClassName="is-active"
    >
      Tabs page
    </NavLink>
  </nav>
);
