import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header: React.FC = () => {
  const getLinkStyle = (status: Status): React.CSSProperties => {
    return status.isActive ? { backgroundColor: '#fff' } : {};
  };

  return (
    <nav className="navbar is-fixed-top has-background-light" data-cy="nav">
      <div className="navbar-menu">
        <div className="navbar-start">
          <NavLink
            to="/"
            className="navbar-item"
            style={getLinkStyle}
          >
            Home Page
          </NavLink>
          <NavLink
            to="/tabs-page"
            className="navbar-item"
            style={getLinkStyle}
          >
            Tabs Page
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
