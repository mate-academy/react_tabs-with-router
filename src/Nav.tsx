import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav
      className="navbar is-fixed-top has-background-light"
      data-cy="nav"
    >
      <div className="navbar-brand">
        <NavLink
          to="/"
          className={({ isActive }) => classNames(
            'navbar-item',
            { 'is-active': isActive },
          )}
          end
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
      </div>
    </nav>
  );
};
