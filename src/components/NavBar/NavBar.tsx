import { PageLink } from '../PageLink';

export const NavBar = () => (
  <nav
    className="navbar is-light is-fixed-top is-mobile has-shadow"
    data-cy="Nav"
  >
    <div className="container">
      <div className="navbar-brand">
        <PageLink to="/" title="Home" />
        <PageLink to="/tabs" title="Tabs" />
      </div>
    </div>
  </nav>
);
