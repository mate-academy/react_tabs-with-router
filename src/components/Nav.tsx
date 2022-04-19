import React from 'react';
import { NavLink } from 'react-router-dom';

export const Nav: React.FC = () => {
  return (
    <div className="nav-links">
      <NavLink
        to="/"
        className={({ isActive }) => (
          `nav-link ${isActive && 'active'}`
        )}
      >
        Home
      </NavLink>
      {' | '}
      <NavLink
        to="/tabs"
        className={({ isActive }) => (
          `nav-link ${isActive && 'active'}`
        )}
      >
        Tabs
      </NavLink>
    </div>
  );
};
