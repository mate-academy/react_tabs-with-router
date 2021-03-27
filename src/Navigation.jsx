import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = () => (
  <nav
    className="navbar"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="navbar-brand">
      <NavLink
        exact
        activeClassName="is-active"
        to="/"
        className="navbar-item is-tab"
      >
        Home
      </NavLink>
      <NavLink
        activeClassName="is-active"
        to="/tabs"
        className="navbar-item is-tab"
      >
        Tabs
      </NavLink>
    </div>
  </nav>
);
