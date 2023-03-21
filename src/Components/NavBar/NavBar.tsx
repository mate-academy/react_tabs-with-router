import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

export const NavBar: FC = () => (
  <nav
    className="navbar is-light is-fixed-top is-mobile has-shadow"
    data-cy="Nav"
  >
    <div className="container">
      <div className="navbar-brand">
        <NavLink
          to="/"
          className={({ isActive }) => classNames(
            'navbar-item',
            { 'is-active': isActive },
          )}
          replace
        >
          Home
        </NavLink>
        <NavLink
          to="/tabs"
          className={({ isActive }) => classNames(
            'navbar-item',
            { 'is-active': isActive },
          )}
          replace
        >
          Tabs
        </NavLink>
      </div>
    </div>
  </nav>
);
