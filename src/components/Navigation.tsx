import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.scss';

export const Navigation = () => (
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
      exact
      className="navbar-item is-tab"
      activeClassName="is-active"
    >
      Tabs page
    </NavLink>
  </nav>
);
