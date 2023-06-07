import { NavLinkComponent } from './NavLinkComponent';

export const NavBar = () => (
  <nav
    className="navbar is-light is-fixed-top is-mobile has-shadow"
    data-cy="Nav"
  >
    <div className="container">
      <div className="navbar-brand">
        <NavLinkComponent to="/" content="Home" />
        <NavLinkComponent to="/tabs" content="Tabs" />
      </div>
    </div>
  </nav>
);
