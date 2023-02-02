import React from 'react';
import { NavItem } from './navItem';

export const Navbar: React.FC = () => (
  <nav
    className="navbar is-light is-fixed-top is-mobile has-shadow"
    data-cy="Nav"
  >
    <div className="container">
      <div className="navbar-brand">
        <NavItem to="/" title="Home" />
        <NavItem to="/tabs" title="Tabs" />
      </div>
    </div>
  </nav>
);
