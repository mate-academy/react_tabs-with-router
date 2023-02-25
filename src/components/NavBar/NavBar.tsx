import React from 'react';
import { NavLinkPage } from '../../pages/NavLinkPage';

export const Navbar: React.FC = () => (
  <nav
    className="navbar is-light is-fixed-top is-mobile has-shadow"
    data-cy="Nav"
  >
    <div className="container">
      <div className="navbar-brand">
        <NavLinkPage to="/" text="Home" />
        <NavLinkPage to="/tabs" text="Tabs" />
      </div>
    </div>
  </nav>
);
