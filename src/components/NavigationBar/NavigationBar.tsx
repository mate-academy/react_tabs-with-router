import React from 'react';
import { PageNavigationLink } from '../PageNavigationLink';

export const NavigationBar: React.FC = () => (
  <nav
    data-cy="Nav"
    className="navbar is-light is-fixed-top is-mobile has-shadow"
  >
    <div className="container">
      <div className="navbar-brand">
        <PageNavigationLink to="/" text="Home" />
        <PageNavigationLink to="/tabs" text="Tabs" />
      </div>
    </div>
  </nav>
);
