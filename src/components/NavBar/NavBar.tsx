import { NavLink } from 'react-router-dom';
import cn from 'classnames';

export function NavBar() {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink
            to="/"
            className={({ isActive }) => cn('navbar-item', {
              'is-active': isActive,
            })}
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
}
