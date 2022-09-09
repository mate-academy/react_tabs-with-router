import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink
            to="/"
            className={({ isActive }) => (
              classNames(
                'navbar-item',
                { isActive },
              )
            )}
          >
            Home
          </NavLink>

          <NavLink
            to="/tabs"
            className="navbar-item"
          >
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
