import { NavLinkItem } from './NavLinkItem';

export const Navigation: React.FC = () => (
  <nav
    className="navbar is-light is-fixed-top is-mobile has-shadow"
    data-cy="Nav"
  >
    <div className="container">
      <div className="navbar-brand">
        <NavLinkItem title="Home" link="/" />

        <NavLinkItem title="Tabs" link="tabs" />
      </div>
    </div>
  </nav>
);
