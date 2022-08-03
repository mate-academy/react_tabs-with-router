import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <nav className="navbar is-fixed-top has-background-light" data-cy="nav">
      <div className="navbar-menu">
        <div className="navbar-start">
          <NavLink to="/" className="navbar-item isActive">Home</NavLink>
          <NavLink to="/tabs" className="navbar-item isActive">Tabs</NavLink>
        </div>
      </div>
    </nav>
  );
};
