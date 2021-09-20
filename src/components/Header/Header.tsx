import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header: React.FC = () => (

<nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      <NavLink
        className="nav-link"
        to="/"
        exact
      >
        Home Page
      </NavLink>

      <NavLink
        className="nav-link"
        to="/tabs/?tabId"
      >
        Tabs Page
      </NavLink>
      </div>
    </div>
  </div>
</nav>
);
