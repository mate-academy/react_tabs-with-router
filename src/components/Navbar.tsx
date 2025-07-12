import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="navbar is-light is-fixed-top is-mobile has-shadow">
      <div className="container">
        <div className="navbar-brand">
          <ul className="navbar-start">
            <li className={location.pathname === '/' ? 'is-active' : ''}>
              <Link to="/">Home</Link>
            </li>
            <li
              className={
                location.pathname.startsWith('/tabs') ? 'is-active' : ''
              }
            >
              <Link to="/tabs">Tabs</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
