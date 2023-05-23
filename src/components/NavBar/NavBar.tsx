import { PageNavLink } from '../NavLink/PageNavLink';

export const NavBar = () => (
  <nav
    className="navbar is-light is-fixed-top is-mobile has-shadow"
    data-cy="Nav"
  >
    <div className="container">
      <div className="navbar-brand">
        <PageNavLink
          to="/"
          name="Home"
        />
        <PageNavLink
          to="/tabs"
          name="Tabs"
        />
      </div>
    </div>
  </nav>
);
