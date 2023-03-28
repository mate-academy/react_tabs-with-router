import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

const selectedNav = (isActive: boolean) => classNames(
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
          className={({ isActive }) => selectedNav(isActive)}
        >
          Home
        </NavLink>
        <NavLink
          to="/tabs"
          className={({ isActive }) => selectedNav(isActive)}
        >
          Tabs
        </NavLink>
      </div>
    </div>
  </nav>
);

export default Nav;
