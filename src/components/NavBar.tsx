import React from 'react';
import NavBarLink from './PageNavLink';

export const NavBar: React.FC = () => (
  <nav
    className="navbar is-light is-fixed-top is-mobile has-shadow"
    data-cy="Nav"
  >
    <div className="container">
      <div className="navbar-brand">
        <NavBarLink to="/" text="Home" />
        <NavBarLink to="/tabs" text="Tabs" />
      </div>
    </div>
  </nav>
);
