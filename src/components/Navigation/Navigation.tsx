import { NavigationLink } from '../NavigationLink/NavigationLink';

export const Navigation = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavigationLink url="/" title="Home" />
          <NavigationLink url="/tabs" title="Tabs" />
        </div>
      </div>
    </nav>
  );
};
