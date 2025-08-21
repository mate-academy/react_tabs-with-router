import { NavbarItemHome } from './NavbarItemHome';
import { NavbarItemTabs } from './NavbarItemTabs';

export const Navbar = () => (
  <nav
    className="navbar is-light is-fixed-top is-mobile has-shadow"
    data-cy="Nav"
  >
    <div className="container">
      <div className="navbar-brand">
        <NavbarItemHome />

        <NavbarItemTabs />
      </div>
    </div>
  </nav>
);
