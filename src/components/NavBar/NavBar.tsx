import { PageNavLink } from '../PageNavLink';

export const NavBar = () => (
  <nav
    className="navbar is-light is-fixed-top is-mobile has-shadow"
    data-cy="Nav"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="container">
      <div className="navbar-brand">
        <PageNavLink title="Home" to="/" />
        <PageNavLink title="Tabs" to="tabs" />
      </div>
    </div>
  </nav>
);
