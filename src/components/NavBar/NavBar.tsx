import { NavBarLink } from '../NavBarLink';

export const NavBar = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavBarLink to="/" name="Home" />
          <NavBarLink to="/tabs" name="Tabs" />
        </div>
      </div>
    </nav>
  );
};
