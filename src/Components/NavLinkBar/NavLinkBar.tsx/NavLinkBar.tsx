import { PageNavLink } from '../../PageNavLink';

export const NavLinkBar = () => (
  <nav
    className="navbar is-light is-fixed-top is-mobile has-shadow"
    data-cy="Nav"
  >
    <div className="container">
      <div className="navbar-brand">
        <PageNavLink to="/" title="Home" />
        <PageNavLink to="/tabs" title="Tabs" />
      </div>
    </div>
  </nav>
);
