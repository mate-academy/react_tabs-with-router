import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <nav className="nav">
      <NavLink to="/" exact className="nav-item" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/tabs/" className="nav-item" activeClassName="active">
        Tabs
      </NavLink>
    </nav>
  </header>
);

export default Header;
