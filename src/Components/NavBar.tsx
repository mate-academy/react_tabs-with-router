import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

export const Navbar: React.FC = () => (
  <nav
    className="navbar is-light is-fixed-top is-mobile has-shadow"
    data-cy="Nav"
  >
    <div className="container">
      <div className="navbar-brand">
        <NavLink
          to="/"
          className={({ isActive }) => classNames(
            'navbar-item',
            { 'is-Active': isActive },
          )}
        >
          Home
        </NavLink>
        <NavLink
          to="/tabs"
          className={({ isActive }) => classNames(
            'navbar-item',
            { 'is-Active': isActive },
          )}
        >
          Tabs
        </NavLink>
      </div>
    </div>
  </nav>
);
