import { PageNavLink } from '../PageNavLink';

export const NavBar = () => (
  <nav
    className="navbar is-light is-fixed-top is-mobile has-shadow"
    data-cy="Nav"
  >
    <div className="container">
      <div className="navbar-brand">
        <PageNavLink path="/" text="Home" />
        <PageNavLink path="/tabs" text="Tabs" />
      </div>
    </div>
  </nav>
);
