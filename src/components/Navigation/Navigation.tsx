import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

export const Navigation: React.FC = () => {
  const activeItem = 'main-navigation__item main-navigation__item--active';
  const inActiveItem = 'main-navigation__item';

  return (
    <nav className="main-navigation">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? activeItem : inActiveItem)}
      >
        Home
      </NavLink>
      <NavLink
        to="/tabs"
        className={({ isActive }) => (isActive ? activeItem : inActiveItem)}
      >
        Tabs
      </NavLink>
    </nav>
  );
};
