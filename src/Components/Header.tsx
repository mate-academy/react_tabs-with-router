import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header: React.FC = () => (
  <header className="Header">
    <nav className="Header__nav nav">
      <ul className="nav-list">
        <li className="nav-list__item">
          {' '}
          <NavLink
            to="/"
            exact
            className="nav-list__link"
            activeClassName="nav-list__link--active"
          >
            Home
          </NavLink>
        </li>
        <li className="nav-list__item">
          {' '}
          <NavLink
            to="/tabs"
            className="nav-list__link"
            activeClassName="nav-list__link--active"
          >
            Tabs
          </NavLink>
          {' '}
        </li>
      </ul>
    </nav>
  </header>
);
