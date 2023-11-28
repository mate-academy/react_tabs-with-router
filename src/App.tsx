import {
  NavLink,
  Outlet,
  useLocation,
} from 'react-router-dom';
import classNames from 'classnames';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { useCallback } from 'react';

export const App = () => {
  const { pathname } = useLocation();

  const getTitle = useCallback((path: string) => {
    if (path === '/') {
      return 'Home page';
    }

    if (path.startsWith('/tabs')) {
      return 'Tabs page';
    }

    return 'Page not found';
  }, []);

  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink
              to="/"
              className={({ isActive }) => classNames('navbar-item',
                { 'is-active': isActive })}
            >
              Home
            </NavLink>
            <NavLink
              to="/tabs"
              className={({ isActive }) => classNames('navbar-item',
                { 'is-active': isActive })}
            >
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <h1 className="title">
            {getTitle(pathname)}
          </h1>

          <Outlet />
        </div>
      </div>
    </>
  );
};
