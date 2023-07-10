import React from 'react';
import { PageLink } from './PageLink';

export const Navbar = () => (
  <nav
    data-cy="Nav"
    className="navbar is-light is-fixed-top is-mobile has-shadow"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="container">
      <div className="navbar-brand">
        <PageLink to="/" text="Home" />
        <PageLink to="/tabs" text="Tabs" />
      </div>
    </div>
  </nav>
);
