import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link
            to="/"
            className={`navbar-item ${pathname === '/' && 'is-active'}`}
          >
            Home
          </Link>
          <Link
            to="/tabs"
            className={`navbar-item ${pathname.includes('/tabs') && 'is-active'}`}
          >
            Tabs
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
