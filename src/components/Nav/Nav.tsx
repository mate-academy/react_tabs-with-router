import { NavItem } from '../NavItem';

export const Nav = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavItem path="/" title="Home" />
          <NavItem path="/tabs" title="Tabs" />
        </div>
      </div>
    </nav>
  );
};
