import React from 'react';
import { PageNavLink } from '../PageNavLink';

export const Navbar: React.FC = () => (
  <nav
    data-cy="Nav"
    className="navbar is-light is-fixed-top is-mobile has-shadow"
  >
    <div className="container">
      <div className="navbar-brand">
        <PageNavLink to="/" label="Home" />
        <PageNavLink to="tabs" label="Tabs" />
      </div>
    </div>
  </nav>
);
