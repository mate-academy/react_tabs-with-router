import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';
import Tabs from '../../image/tabs.png';
import Home from '../../image/home.png';

export const Nav: React.FC = () => (
  <nav className="nav">
    <NavLink
      className="nav__link"
      to="/"
    >
      <img
        src={Home}
        alt="Home"
        className="nav__image"
      />
    </NavLink>

    <NavLink
      className="nav__link"
      to="/tabs"
    >
      <img
        src={Tabs}
        alt="Tabs"
        className="nav__image"
      />
    </NavLink>
  </nav>
);
