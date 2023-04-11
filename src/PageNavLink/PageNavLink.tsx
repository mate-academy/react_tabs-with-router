import { PageNavigationLink } from '../PageNavigationLink/PageNavigationLink';

export const PageNavigation = () => (
  <nav
    className="navbar is-light is-fixed-top is-mobile has-shadow"
    data-cy="Nav"
  >
    <div className="container">
      <div className="navbar-brand">
        <PageNavigationLink to="/" title="Home" />
        <PageNavigationLink to="/tabs" title="Tabs" />
      </div>
    </div>
  </nav>
);
