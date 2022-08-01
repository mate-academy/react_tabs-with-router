import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__nav-list">
          <NavLink
            to="/"
            className={({ isActive }) => (
              isActive ? 'header__nav-link is-active' : 'header__nav-link'
            )}
          >
            Home page
          </NavLink>
          <NavLink
            to="/tabs"
            className={({ isActive }) => (
              isActive ? 'header__nav-link is-active' : 'header__nav-link'
            )}
          >
            Tabs
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};
