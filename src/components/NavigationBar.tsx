import { PageNavLink } from './PageNavLink';

export const NavigationBar: React.FC = () => (
  <nav
    className="navbar is-light is-fixed-top is-mobile has-shadow"
    data-cy="Nav"
  >
    <div className="container">
      <div className="navbar-brand">
        <PageNavLink to="/" navText="Home" nestingLevel={1} />
        <PageNavLink to="/tabs" navText="Tabs" nestingLevel={1} />
      </div>
    </div>
  </nav>
);
