import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Outlet, Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

export const App = () => {
  const location = useLocation();

  const isHome = location.pathname === '/';
  const isTabs = location.pathname.startsWith('/tabs');

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link
              to="/"
              className={classNames('navbar-item', { 'is-active': isHome })}
              aria-current={isHome ? 'page' : undefined}
            >
              Home
            </Link>

            <Link
              to="/tabs"
              className={classNames('navbar-item', { 'is-active': isTabs })}
              aria-current={isTabs ? 'page' : undefined}
            >
              Tabs
            </Link>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  );
};
