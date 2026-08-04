import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';

export const Navigation = () => {
  const { pathname } = useLocation();

  const isHomeActive = pathname === '/';
  const isTabsActive = pathname === '/tabs' || pathname.startsWith('/tabs/');

  return (
    <nav className="navbar is-fixed-top has-shadow" data-cy="Nav">
      <div className="container">
        <div className="navbar-menu">
          <div className="navbar-start">
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
              >
                Tabs
              </Link>
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
};
