import { PageNavLink } from './PageNavLink';

export const MainNav: React.FC = () => (
  <nav
    // eslint-disable-next-line max-len
    className="navbar is-light is-fixed-top is-mobile has-shadow has-navbar-fixed-top"
    data-cy="Nav"
  >
    <div className="container">
      <div className="navbar-brand">
        <PageNavLink to="/" text="Home" />

        <PageNavLink to="/tabs" text="Tabs" />
      </div>
    </div>
  </nav>
);
