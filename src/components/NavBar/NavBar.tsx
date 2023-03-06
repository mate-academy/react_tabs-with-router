import { NavBarLink } from '../NavBarLink';

export const NavBar = () => (
  <nav
    className="navbar is-light is-fixed-top is-mobile has-shadow"
    data-cy="Nav"
  >
    <div className="container">
      <div className="navbar-brand">
        <NavBarLink to="/">
          Home
        </NavBarLink>
        <NavBarLink to="/tabs">
          Tabs
        </NavBarLink>
      </div>
    </div>
  </nav>
);
