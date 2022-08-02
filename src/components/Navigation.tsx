import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bulma/css/bulma.css';
import classNames from 'classnames';

export const Navigation: React.FC = () => {
  const callback = (navData: { isActive: boolean }) => (classNames(
    'navbar-item',
    { 'is-active': navData.isActive },
  ));

  return (
    <header className="navbar">
      <nav className="navbar-menu columns is-centered mt-4 mb-4">
        <NavLink
          className={callback}
          to="/"
        >
          Home
        </NavLink>

        <NavLink
          className={callback}
          to="/tabs"
        >
          Tabs
        </NavLink>
      </nav>
    </header>
  );
};
