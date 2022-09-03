import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

export const NavBar: React.FC = () => {
  return (
    <nav
      data-cy="nav"
      className="
        navbar
        is-light
        is-fixed-top
        is-mobile
        has-shadow
      "
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink
            className={({ isActive }) => (
              cn(
                'navbar-item',
                { isActive },
              )
            )}
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) => (
              cn(
                'navbar-item',
                { isActive },
              )
            )}
            to="/tabs"
          >
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
