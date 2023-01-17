import React from 'react';
import { PageNavLink } from '../PageNavLink';

export const Navbar: React.FC = React.memo(
  () => (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <PageNavLink to="/" navTitle="Home" />
          <PageNavLink to="/tabs" navTitle="Tabs" />
        </div>
      </div>
    </nav>
  ),
);
