import { FC } from 'react';
import { NavigationLink } from '../NavigationLink';

export const NavigationBar: FC = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavigationLink link="/" name="Home" />
          <NavigationLink link="/tabs" name="Tabs" />
        </div>
      </div>
    </nav>
  );
};
