import React from 'react';

import { NavbarLink } from '../NavBarLink/NavbarLink';

export const Navbar: React.FC = () => (
  <nav
    className="navbar is-light is-fixed-top is-mobile has-shadow"
    data-cy="Nav"
  >
    <div className="container">
      <div className="navbar-brand">
        <NavbarLink path="/" text="Home" />
        <NavbarLink path="/tabs" text="Tabs" />
      </div>
    </div>
  </nav>
);
