import React from 'react';
import { NavigationLink } from './NavigationLink';

export const NavBar: React.FC = () => (
  <nav
    className="navbar is-light is-fixed-top is-mobile has-shadow"
    data-cy="Nav"
  >
    <div className="container">
      <div className="navbar-brand">
        <NavigationLink to="/" title="Home" />
        <NavigationLink to="/tabs" title="Tabs" />
      </div>
    </div>
  </nav>
);
