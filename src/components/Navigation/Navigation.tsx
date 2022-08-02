import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation: React.FC = () => {
  return (
    <nav className="m-4">
      <NavLink
        to="/"
        className={({ isActive }) => classNames(
          'button mr-4',
          { 'is-danger is-outlined': !isActive },
          { 'is-success': isActive },
        )}
      >
        Home
      </NavLink>
      <NavLink
        to="/tabs"
        className={({ isActive }) => classNames(
          'button mr-4',
          { 'is-danger is-outlined': !isActive },
          { 'is-success': isActive },
        )}
      >
        Tabs
      </NavLink>
    </nav>
  );
};
