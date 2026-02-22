import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navigation: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <div className={`navbar-item ${pathname === '/' ? 'is-active' : ''}`}>
            <Link to="/">Home</Link>
          </div>

          <div
            className={`navbar-item ${pathname.startsWith('/tabs') ? 'is-active' : ''}`}
          >
            <Link to="/tabs">Tabs</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
