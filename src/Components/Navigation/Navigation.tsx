import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

export const Navigation:React.FC = () => {
  return (
    <nav className="menu">
      <ul className="menu__list">
        <NavLink
          to="/"
          className={({ isActive }) => classNames('menu__item', { 'menu__item--active': isActive })}
        >
          Home
        </NavLink>
        <NavLink
          to="/tabs"
          className={({ isActive }) => classNames('menu__item', { 'menu__item--active': isActive })}
        >
          Tabs
        </NavLink>
      </ul>
    </nav>
  );
};
