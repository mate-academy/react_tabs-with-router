import React, { memo } from 'react';
import { PageNavLink } from '../PageNavLink/PageNavLink';

export const Navbar: React.FC = memo(() => (
  <nav
    className="navbar is-light is-fixed-top is-mobile has-shadow"
    data-cy="Nav"
  >
    <div className="container">
      <div className="navbar-brand">
        <PageNavLink to="/" text="Home" />
        <PageNavLink to="/tabs" text="Tabs" />
      </div>
    </div>
  </nav>
));
