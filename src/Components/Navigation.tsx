import React from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

// eslint-disable-next-line no-lone-blocks
{ /* Also requires <html class="has-navbar-fixed-top"> */ }

export const Navigation:React.FC = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink
            to="/"
            className={({ isActive }) => (
              cn(
                'navbar-item',
                { 'is-active': isActive },
              ))}
          >
            Home
          </NavLink>
          <NavLink
            to="/tabs"
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
};
