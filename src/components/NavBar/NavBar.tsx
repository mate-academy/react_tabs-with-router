import { NavBarPage } from '../NavBarPage/NavBarPage';

export const NavBar = () => (
  <>
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavBarPage to="/" title="Home" />
          <NavBarPage to="/tabs" title="Tabs" />
        </div>
      </div>
    </nav>
  </>
);
