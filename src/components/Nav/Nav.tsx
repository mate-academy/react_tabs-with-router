import { NavLinkItem } from './NavLinkItem';

export const Nav = () => (
  <nav
    className="navbar is-light is-fixed-top is-mobile has-shadow"
    data-cy="Nav"
  >
    <div className="container">
      <div className="navbar-brand">
        <NavLinkItem to="/" text="Home" />
        <NavLinkItem to="/tabs" text="Tabs" />
      </div>
    </div>
  </nav>
);
