import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { navLinks } from '../../constants/navLinks';

export const Nav = () => (
  <nav
    className="navbar is-light is-fixed-top is-mobile has-shadow"
    data-cy="Nav"
  >
    <div className="container">
      <div className="navbar-brand">
        {navLinks.map(({ path, title, id }) => (
          <NavLink
            key={id}
            to={path}
            className={({ isActive }) =>
              cn('navbar-item', { 'is-active': isActive })
            }
          >
            {title}
          </NavLink>
        ))}
      </div>
    </div>
  </nav>
);
