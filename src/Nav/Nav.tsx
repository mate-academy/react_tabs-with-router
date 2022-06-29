import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

const Nav:React.FC = () => {
  return (
    <nav className="nav">
      <NavLink className="nav__link" to="/">Home</NavLink>

      <NavLink className="nav__link" to="/tabs">Tabs Page</NavLink>
    </nav>
  );
};

export default Nav;
