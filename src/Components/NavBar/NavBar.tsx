import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem } from '../../types/NavItem';

interface Props {
  navItems: NavItem [];
}

export const NavBar: React.FC<Props> = React.memo(({ navItems }) => (
  <nav
    className="navbar is-light is-fixed-top is-mobile has-shadow"
    data-cy="Nav"
  >
    <div className="container">
      <div className="navbar-brand">
        {navItems.map(({ id, url, title }) => (
          <NavLink
            key={id}
            to={url}
            className={({ isActive }) => classNames('navbar-item', {
              'is-active': isActive,
            })}
          >
            {title}
          </NavLink>
        ))}
      </div>
    </div>
  </nav>
));
