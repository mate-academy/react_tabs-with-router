import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

export const NavBar = () => (
  <>
    <NavLink
      to="/"
      className={({ isActive }) => classNames(
        'navbar-item',
        { 'is-active': isActive },
      )}
    >
      Home
    </NavLink>
    <NavLink
      to="/tabs"
      className={({ isActive }) => classNames(
        'navbar-item',
        { 'is-active': isActive },
      )}
    >
      Tabs
    </NavLink>
  </>
);
