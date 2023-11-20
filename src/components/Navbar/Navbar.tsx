import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

export const Navbar: React.FC = () => {
  return (
    <nav
      className="
      navbar
      is-light
      has-navbar-fixed-top
      is-fixed-top
      is-mobile
      has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink
            to="/"
            className={({ isActive }) => (
              cn(
                'navbar-item',
                {
                  'is-active': isActive,
                },
              )
            )}
          >
            Home
          </NavLink>

          <NavLink
            to="/tabs"
            className={({ isActive }) => (
              cn(
                'navbar-item',
                {
                  'is-active': isActive,
                },
              )
            )}
          >
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
