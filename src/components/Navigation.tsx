import cn from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Page } from '../types/Pages';

export const Navigation: React.FC = () => (
  <nav
    className="navbar is-light is-fixed-top is-mobile has-shadow"
    data-cy="Nav"
  >
    <div className="container">
      <div className="navbar-brand">
        <NavLink
          to={Page.home}
          className={({ isActive }) => (
            cn(
              'navbar-item',
              { 'is-active': isActive },
            ))}
        >
          Home
        </NavLink>

        <NavLink
          to={Page.tabs}
          className={({ isActive }) => (
            cn(
              'navbar-item',
              { 'is-active': isActive },
            ))}
        >
          Tabs
        </NavLink>
      </div>
    </div>
  </nav>
);
