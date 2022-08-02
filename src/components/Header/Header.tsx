import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';

export const Header: React.FC = () => {
  const hasActive = ({ isActive }: { isActive: boolean }) => (
    isActive ? 'header__nav-link is-active' : 'header__nav-link'
  );

  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__nav-list">
          <NavLink
            to="/"
            className={hasActive}
          >
            Home page
          </NavLink>
          <NavLink
            to="/tabs"
            className={hasActive}
          >
            Tabs
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};
