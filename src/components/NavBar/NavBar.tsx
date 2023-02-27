import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

export const NavBar: FC = () => (
  <div className="navbar-brand">
    <NavLink
      to="/"
      className={({ isActive }) => cn('navbar-item', {
        'is-active': isActive,
      })}
    >
      Home
    </NavLink>
    <NavLink
      to="/tabs"
      className={({ isActive }) => cn('navbar-item', {
        'is-active': isActive,
      })}
    >
      Tabs
    </NavLink>
  </div>
);
