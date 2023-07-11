import { HeaderNavLink } from '../HeaderNavLink/HeaderNavLink';

export const Header: React.FC = () => (
  <nav
    className="navbar is-light is-fixed-top is-mobile has-shadow"
    data-cy="Nav"
  >
    <div className="container">
      <div className="navbar-brand">
        <HeaderNavLink to="/" text="Home" />
        <HeaderNavLink to="/tabs" text="Tabs" />
      </div>
    </div>
  </nav>
);
