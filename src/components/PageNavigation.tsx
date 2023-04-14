import { PageNavLink } from './PageLinks';

export const PageNavigation: React.FC = () => (
  <nav
    className="navbar is-light is-fixed-top is-mobile has-shadow"
    data-cy="Nav"
  >
    <div className="container">
      <div className="navbar-brand">
        <PageNavLink url="/" title="Home" />
        <PageNavLink url="/tabs" title="Tabs" />
      </div>
    </div>
  </nav>
);
