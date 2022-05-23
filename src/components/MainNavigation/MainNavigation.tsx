import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import './MainNavigation.scss';

export const MainNavigation: React.FC = React.memo(() => (
  <nav className="main">
    <NavLink
      to="/"
      className={({ isActive }) => cn('main__link',
        { 'main__link--active': isActive })}
    >
      Home
    </NavLink>
    {' '}
    &#9830;
    {' '}
    <NavLink
      to="/tabs"
      className={({ isActive }) => cn('main__link',
        { 'main__link--active': isActive })}
    >
      Brands
    </NavLink>
  </nav>
));
