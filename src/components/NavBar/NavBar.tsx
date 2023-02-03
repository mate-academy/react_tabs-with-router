import React, { memo } from 'react';
import { NavBarItems } from '../NavBarItems/NavBarItems';

export const NavBar: React.FC = memo(() => (
  <nav
    className="navbar is-light is-fixed-top is-mobile has-shadow"
    data-cy="Nav"
  >
    <div className="container">
      <div className="navbar-brand">
        <NavBarItems to="/" title="Home" />
        <NavBarItems to="/tabs" title="Tabs" />
      </div>
    </div>
  </nav>
));
