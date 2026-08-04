import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';

export const Navigation = () => {
  const { pathname } = useLocation();

  const isHomeActive = pathname === '/';
  const isTabsActive = pathname === '/tabs' || pathname.startsWith('/tabs/');

  return (
    <nav className="navbar is-light is-fixed-top has-shadow" data-cy="Nav">
      <div className="container">
        <div className="navbar-brand">
          <ul className="navbar-brand__list">
            <li
              className={classNames({
                'is-active': isHomeActive,
              })}
            >
              <Link
                to="/"
                className={classNames('navbar-item', {
                  'is-active': isHomeActive,
                })}
                aria-current={isHomeActive ? 'page' : undefined}
              >
                Home
              </Link>
            </li>

            <li
              className={classNames({
                'is-active': isTabsActive,
              })}
            >
              <Link
                to="/tabs"
                className={classNames('navbar-item', {
                  'is-active': isTabsActive,
                })}
                aria-current={isTabsActive ? 'page' : undefined}
              >
                Tabs
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
