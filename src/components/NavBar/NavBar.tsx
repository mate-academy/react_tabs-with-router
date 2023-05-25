import { memo } from 'react';
import { NavigationLink } from '../NavigationLink';

export const NavBar = memo(() => (
  <nav
    className="navbar is-light is-fixed-top is-mobile has-shadow"
    data-cy="Nav"
  >
    <div className="container">
      <div className="navbar-brand">
        <NavigationLink to="/" title="Home" />

        <NavigationLink to="/tabs" title="Tabs" />
      </div>
    </div>
  </nav>
));
