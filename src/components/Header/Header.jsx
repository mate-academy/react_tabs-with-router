import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => (
  <header>
    <nav className="navbar">
      <div className="navbar-menu">
        <NavLink
          to="/"
          exact
          className="navbar-item is-tab"
          activeClassName="is-active"
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
      </div>
    </nav>
  </header>
);
