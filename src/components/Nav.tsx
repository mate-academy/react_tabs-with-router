import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

export const Nav: FC = () => (
  <nav className="nav">
    <NavLink
      to="/"
      className="nav__item"
      activeClassName="nav__item--active"
      exact
    >
      Home
    </NavLink>
    <NavLink
      to="/tabs"
      className="nav__item"
      activeClassName="nav__item--active"
    >
      Tabs
    </NavLink>
  </nav>
);
