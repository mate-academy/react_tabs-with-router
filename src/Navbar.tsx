import { PageNavLink } from './PageNavLink';

export const Navbar = () => (
  <nav
    className="navbar is-light is-fixed-top is-mobile has-shadow"
    data-cy="nav"
  >
    <div className="container">
      <div className="navbar-brand">
        <PageNavLink to="/" text="Home" />
        <PageNavLink to="tabs" text="Tabs" />
      </div>
    </div>
  </nav>
);
