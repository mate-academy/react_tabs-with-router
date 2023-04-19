import { PageNavLink } from './PageNavLink';

export const MainNav = () => (
  <nav
    data-cy="Nav"
    className="navbar is-light is-fixed-top has-shadow"
  >
    <div className="container">
      <div className="navbar-brand">
        <PageNavLink to="/" text="Home" />
        <PageNavLink to="tabs" text="Tabs" />
      </div>
    </div>
  </nav>
);
