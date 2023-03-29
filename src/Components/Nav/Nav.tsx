import cn from 'classnames';
import { NavLink } from 'react-router-dom';

const selectedNav = ({ isActive }: { isActive: boolean }) => cn(
  'navbar-item',
  { 'is-active': isActive },
);

const Nav = () => (
  <nav
    className="navbar is-light is-fixed-top is-mobile has-shadow"
    data-cy="Nav"
  >
    <div className="container">
      <div className="navbar-brand">
        <NavLink
          to="/"
          className={selectedNav}
        >
          Home
        </NavLink>
        <NavLink
          to="/tabs"
          className={selectedNav}
        >
          Tabs
        </NavLink>
      </div>
    </div>
  </nav>
);

export default Nav;
