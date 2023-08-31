import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

const getNavClass = ({ isActive }: { isActive: boolean }) => classNames(
  'navbar-item', {
    'is-active': isActive,
  },
);

export const Navigation: React.FC = () => (
  <nav
    data-cy="Nav"
    className="
      navbar
      is-light
      is-fixed-top
      is-mobile
      has-shadow"
  >
    <div className="container">
      <div className="navbar-brand">
        <NavLink to="/" className={getNavClass}>
          Home
        </NavLink>

        <NavLink to="/tabs" className={getNavClass}>
          Tabs
        </NavLink>
      </div>
    </div>
  </nav>
);
