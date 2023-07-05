import React from 'react';
import { PageNavLink } from './PageNavLink';

export const MainNav = () => (
  /* Also requires <html class="has-navbar-fixed-top"> */
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
);
