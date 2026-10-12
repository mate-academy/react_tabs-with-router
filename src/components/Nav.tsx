import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { NAVIGATION_PAGES } from '../constants';

export const Nav = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          {NAVIGATION_PAGES.map(page => (
            <NavLink
              key={page.id}
              to={page.path}
              className={({ isActive }) =>
                cn('navbar-item', { 'is-active': isActive })
              }
            >
              {page.title}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};
