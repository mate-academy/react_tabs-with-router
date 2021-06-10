import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = () => (
  <nav className="navbar">
    <div className="navbar-brand">
      <NavLink
        className="navbar-item is-tab"
        exact
        to="/"
        activeClassName="is-active"
      >
        Home
      </NavLink>

      <NavLink
        className="navbar-item is-tab"
        to="/tabs"
        activeClassName="is-active"
      >
        TabsPage
      </NavLink>
    </div>
  </nav>
);
