import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = () => (
  <nav className="navbar">
    <div className="navbar-brand">
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
      >
        Tabs
      </NavLink>

      <NavLink
        to="/about"
        className="navbar-item is-tab"
        activeClassName="is-active"
      >
        About us
      </NavLink>
    </div>
  </nav>
);
