import { PageNavLink } from './PageNavLink';
import { PageRoutes } from '../types/PageRoutes';

export const Navigation = () => (
  <nav
    className="navbar is-light is-fixed-top is-mobile has-shadow"
    data-cy="Nav"
  >
    <div className="container">
      <div className="navbar-brand">
        <PageNavLink to={PageRoutes.home} text="Home" />
        <PageNavLink to={PageRoutes.tabs} text="Tabs" />
      </div>
    </div>
  </nav>
);
