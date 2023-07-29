import React from 'react';
import { PageNavLink } from '../PageNavLink';

export const NavLinks: React.FC = () => (
  <nav
    className="navbar is-light is-fixed-top is-mobile has-shadow"
    data-cy="Nav"
  >
    <div className="container">
      <div className="navbar-brand has-navbar-fixed-top">
        <PageNavLink to="/" content="Home" />

        <PageNavLink to="/tabs" content="Tabs" />
      </div>
    </div>
  </nav>
);
