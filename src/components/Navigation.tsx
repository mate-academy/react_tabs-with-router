import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export const Navigation: React.FC = () => {
  const location = useLocation();
  const isTabsActive = location.pathname.startsWith('/tabs');

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `navbar-item ${isActive && !isTabsActive ? 'is-active' : ''}`
            }
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/tabs"
            className={`navbar-item ${isTabsActive ? 'is-active' : ''}`}
            end
          >
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
