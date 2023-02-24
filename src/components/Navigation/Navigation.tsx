import React from 'react';
import { NavigationLink } from '../NavigationLink';

export const Navigation: React.FC = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavigationLink to="/">
            Home
          </NavigationLink>

          <NavigationLink to="/tabs">
            Tabs
          </NavigationLink>
        </div>
      </div>
    </nav>
  );
};
