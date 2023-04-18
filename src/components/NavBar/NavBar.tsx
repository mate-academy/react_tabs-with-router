import React from 'react';
import { NavigationLink } from '../NavigationLink';

export const NavBar: React.FC = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavigationLink link="/" text="Home" />
          <NavigationLink link="/tabs" text="Tabs" />
        </div>
      </div>
    </nav>
  );
};
