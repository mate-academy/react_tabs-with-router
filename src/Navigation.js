import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav
    className="navbar-menu"
  >
    <Link className="navbar-item card-header-title" to="/">
      Home
    </Link>
    <Link className="navbar-item card-header-title" to="/tabs">
      Tabs
    </Link>
  </nav>
);

export default Navigation;
