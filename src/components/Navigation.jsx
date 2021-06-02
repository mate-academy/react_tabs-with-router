import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = () => (
  <nav className="navbar">
    <div className="container">
      <ul className="navbar-menu">
        <li>
          <NavLink
            to="/"
            exact
            className="navbar-item is-tab"
            activeClassName="is-active"
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/tabs"
            className="navbar-item is-tab"
            activeClassName="is-active"
          >
            Tabs
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);
