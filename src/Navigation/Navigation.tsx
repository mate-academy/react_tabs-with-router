import React, { memo } from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

export const Navigation: React.FC = memo(() => (
  <div className="navbar-brand">
    <NavLink
      to="/"
      className={({ isActive }) => cn('navbar-item',
        { 'is-active': isActive })}
    >
      Home
    </NavLink>

    <NavLink
      to="tabs"
      className={({ isActive }) => cn('navbar-item',
        { 'is-active': isActive })}
    >
      Tabs
    </NavLink>
  </div>
));
