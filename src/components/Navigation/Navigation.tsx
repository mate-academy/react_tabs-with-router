import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';

export const Navigation = () => {
  const { pathname } = useLocation();

  const isHomeActive = pathname === '/';
  const isTabsActive = pathname.startsWith('/tabs');

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link
            to="/"
            className={classNames('navbar-item', {
              'is-active': isHomeActive,
            })}
          >
            Home
          </Link>

          <Link
            to="/tabs"
            className={classNames('navbar-item', {
              'is-active': isTabsActive,
            })}
          >
            Tabs
          </Link>
        </div>
      </div>
    </nav>
  );
};
