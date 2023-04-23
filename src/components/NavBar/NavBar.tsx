import { NavBarLink } from '../NavBarLink/index';

export const Navbar = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavBarLink to="/" text="Home" />
          <NavBarLink to="/tabs" text="Tabs" />
        </div>
      </div>
    </nav>
  );
};
