import { NavLinkCustom } from '../NavLinkCustom';

export const Header = () => (
  <nav
    className="navbar is-light is-fixed-top is-mobile has-shadow"
    data-cy="Nav"
  >
    <div className="container">
      <div className="navbar-brand">
        <NavLinkCustom to="/" title="Home" />
        <NavLinkCustom to="/tabs" title="Tabs" />
      </div>
    </div>
  </nav>
);
