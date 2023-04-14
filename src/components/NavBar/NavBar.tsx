import { AppNavLink } from '../AppNavLink';

export const NavBar = () => (
  <nav
    className="navbar is-light is-fixed-top is-mobile has-shadow"
    data-cy="Nav"
  >
    <div className="container">
      <div className="navbar-brand">
        <AppNavLink to="/" text="Home" />
        <AppNavLink to="/tabs" text="Tabs" />
      </div>
    </div>
  </nav>
);
