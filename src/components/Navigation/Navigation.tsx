import { FC, memo } from 'react';
import { NavigationPage } from '../NavigationPage';

export const Navigation: FC = memo(() => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavigationPage to="/" text="Home" />
          <NavigationPage to="/tabs" text="Tabs" />
        </div>
      </div>
    </nav>
  );
});
