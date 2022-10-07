import { PageNavLink } from './PageNavLink';

export const MainNav = () => (
  <nav
    data-cy="Nav"
    className="navbar is-light is-fixed-top is-mobile has-shadow"
  >
    <div className="container">
      <div className="navbar-brand">
        <PageNavLink to="/" textLink="Home" />
        <PageNavLink to="tabs" textLink="Tabs" />

      </div>
    </div>
  </nav>
);
