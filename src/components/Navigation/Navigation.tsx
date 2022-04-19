import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

export const Navigation: React.FC = () => (
  <div className="app">
    <nav />
    <NavLink
      to="/home"
      className={({ isActive }) => classNames(
        'nav__link',
        { 'nav__link--active': isActive },
      )}
    >
      Home
    </NavLink>
    {' '}
    |
    {' '}
    <NavLink
      to="/tabs"
      className={({ isActive }) => classNames(
        'nav__link',
        { 'nav__link--active': isActive },
      )}
    >
      Tabs
    </NavLink>
  </div>

);
