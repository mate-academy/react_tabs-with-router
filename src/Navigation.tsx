import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

export const Navigation: React.FC = () => (
  <nav
    className="navbar
      is-light is-fixed-top
      is-mobile has-shadow
      has-navbar-fixed-top"
    data-cy="Nav"
  >
    <div className="container">
      <div className="navbar-brand">
        <NavLink
          className={({ isActive }) => (classNames('navbar-item', {
            'is-active': isActive,
          }))}
          to="/"
        >
          Home
        </NavLink>

        <NavLink
          className={({ isActive }) => (classNames('navbar-item', {
            'is-active': isActive,
          }))}
          to="/tabs"
        >
          Tabs
        </NavLink>
      </div>
    </div>
  </nav>
);
