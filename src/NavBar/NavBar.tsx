import { NavBarItem } from '../NavBarItem/NavBarItem';

export const NavBar = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavBarItem to="/" text="Home" />
          <NavBarItem to="/tabs" text="Tabs" />
        </div>
      </div>
    </nav>
  );
};
