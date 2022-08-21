import cn from 'classnames';
import { FC, memo } from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar: FC = memo(() => (
  <nav className="navbar is-fixed-top has-background-light" data-cy="nav">
    <div className="navbar-menu">
      <div className="navbar-start">
        <NavLink
          to="/"
          className={({ isActive }) => (
            cn('navbar-item',
              { 'is-active': isActive })
          )}
        >
          Home
        </NavLink>
        <NavLink
          to="/tabs"
          className={({ isActive }) => (
            cn('navbar-item',
              { 'is-active': isActive })
          )}
        >
          Tabs
        </NavLink>
      </div>
    </div>
  </nav>
));
