import cn from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation: React.FC = () => (
  <div className="navbar-brand">
    <NavLink
      className={({ isActive }) => (
        cn(
          'navbar-item',
          { 'is-active': isActive },
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
          { 'is-active': isActive },
        )
      )}
      to="/tabs"
    >
      Tabs
    </NavLink>
  </div>
);
