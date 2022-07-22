import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

export const Navigation: React.FC = () => {
  return (
    <nav className="main-navigation">
      <NavLink
        to="/"
        className={({ isActive }) => classNames(
          'navbar-item',
          'is-tab',
          { 'is-active': isActive },
        )}
      >
        Home
      </NavLink>

      <NavLink
        to="/tabs"
        className={({ isActive }) => classNames(
          'navbar-item',
          'is-tab',
          { 'is-active': isActive },
        )}
      >
        Tabs
      </NavLink>
    </nav>
  );
};
