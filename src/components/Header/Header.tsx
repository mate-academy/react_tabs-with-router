import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <div className="header">
      <nav className="nav">
        <NavLink
          className="nav__link"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          to="/tabs"
          className="nav__link"
        >
          bussiness
        </NavLink>
      </nav>
    </div>
  );
};
