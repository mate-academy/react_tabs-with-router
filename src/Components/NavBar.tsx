import React, { memo } from 'react';
import { NavigationLink } from './NavigationLink';

export const NavBar: React.FC = memo(() => (
  <nav
    className="navbar is-light is-fixed-top is-mobile has-shadow"
    data-cy="Nav"
  >
    <div className="container">
      <div className="navbar-brand">
        <NavigationLink to="/" name="Home" />
        <NavigationLink to="/tabs" name="Tabs" />
      </div>
    </div>
  </nav>
));
