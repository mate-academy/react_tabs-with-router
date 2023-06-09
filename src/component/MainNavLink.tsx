import { PageNavLink } from './PageNavLink';

export const MainNavLink = () => (
  <nav
    className="navbar is-light is-fixed-top is-mobile has-shadow"
    data-cy="Nav"
  >
    <div className="container">
      <div className="navbar-brand has-navbar-fixed-top">
        <PageNavLink to="/" text="Home" />

        <PageNavLink
          to="/tabs"
          text="Tabs"
        />
      </div>
    </div>
  </nav>
);
