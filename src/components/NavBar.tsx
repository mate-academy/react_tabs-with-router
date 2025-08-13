import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';

export const NavBar = () => {
  const location = useLocation();

  const isHomeActive = location.pathname === '/';
  const isTabsActive = location.pathname.startsWith('/tabs');

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <ul>
            <li className={classNames({ 'is-active': isHomeActive })}>
              <Link
                to="/"
                className={classNames('navbar-item', {
                  'is-active': isHomeActive,
                })}
              >
                Home
              </Link>
            </li>
            <li className={classNames({ 'is-active': isTabsActive })}>
              <Link
                to="/tabs"
                className={classNames('navbar-item', {
                  'is-active': isTabsActive,
                })}
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
