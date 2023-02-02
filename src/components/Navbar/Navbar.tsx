import cn from 'classnames';
import { NavLink } from 'react-router-dom';

export const Navbar: React.FC = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink
            className={({ isActive }) => cn('navbar-item',
              {
                'is-active': isActive,
              })}
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) => cn('navbar-item',
              {
                'is-active': isActive,
              })}
            to="/tabs"
          >
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
