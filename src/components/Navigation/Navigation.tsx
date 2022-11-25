import React from 'react';
import { PageNavLink } from '../PageNavLink';

export const Navigation: React.FC = () => (
  <nav
    data-cy="nav"
    // eslint-disable-next-line max-len
    className="navbar is-light is-fixed-top is-mobile has-shadow has-navbar-fixed-top"
  >
    <div className="container">
      <div className="navbar-brand">
        <PageNavLink to="/" text="Home" />
        <PageNavLink to="/tabs" text="Tabs" />
      </div>
    </div>
  </nav>
);
