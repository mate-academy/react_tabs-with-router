import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bulma/css/bulma.css';
import classNames from 'classnames';

export const Navigation: React.FC = () => (
  <header className="navbar">
    <nav className="navbar-menu columns is-centered mt-4 mb-4">
      <NavLink
        className={(navData) => (classNames(
          'navbar-item',
          { 'is-active': navData.isActive },
        ))}
        to="/"
      >
        Home
      </NavLink>

      <NavLink
        className={(navData) => (classNames(
          'navbar-item',
          { 'is-active': navData.isActive },
        ))}
        to="/tabs"
      >
        Tabs
      </NavLink>
    </nav>
  </header>
);
