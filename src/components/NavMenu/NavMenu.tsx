import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

const getActiveClass = ({ isActive }: { isActive: boolean }) =>
  cn('navbar-item', { 'is-active': isActive });

export const NavMenu: FC = () => (
  <nav
    className="navbar is-light is-fixed-top is-mobile has-shadow"
    data-cy="Nav"
  >
    <div className="container">
      <div className="navbar-brand">
        <NavLink to="/" className={getActiveClass}>
          Home
        </NavLink>
        <NavLink to="/tabs" className={getActiveClass}>
          Tabs
        </NavLink>
      </div>
    </div>
  </nav>
);
