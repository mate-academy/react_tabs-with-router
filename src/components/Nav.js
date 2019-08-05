import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav className="nav">
    <ul className="nav__list">
      <li className="nav__item">
        <NavLink to="/" exact>Home</NavLink>
      </li>
      <li className="nav__item">
        <NavLink to="/tabs">Tabs</NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
