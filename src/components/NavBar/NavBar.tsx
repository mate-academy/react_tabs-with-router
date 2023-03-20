import { NavigationLink } from '../NavigationLink';

export const NavBar = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <NavigationLink to="/" text="Home" />
        <NavigationLink to="/tabs" text="Tabs" />
      </div>
    </nav>
  );
};
