import React from 'react';
import { Link } from 'react-router-dom';
import './MainNavigation.scss';

export const MainNavigation = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div id="navbarBasicExample">
      <div className="navbar-start">
        <Link to="/" className="navbar-item">
          Home
        </Link>
        <Link to="/tabs" className="navbar-item">
          Tabs
        </Link>
      </div>
    </div>
  </nav>
);
