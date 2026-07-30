import { Link, Outlet, useLocation } from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import classNames from 'classnames';
import React from 'react';

export const App: React.FC = () => {
  const { pathname } = useLocation();
  const isHomeActive = pathname === '/' || pathname === '/home';
  const isTabsActive = pathname.startsWith('/tabs');

  return (
    <div data-cy="app">
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

            {/* <ul className="navbar-start" style={{ display: 'flex' }}>
              <li
                className={classNames('navbar-item', {
                  'is-active': isHomeActive,
                })}
              >
                <Link to="/" data-cy="NavTab">
                  Home
                </Link>
              </li>

              <li
                className={classNames('navbar-item', {
                  'is-active': isTabsActive,
                })}
              >
                <Link to="/tabs" data-cy="NavTab">
                  Tabs
                </Link>
              </li>
            </ul> */}
          </div>
        </div>
      </nav>

      <main className="section">
        <Outlet />
      </main>
    </div>
  );
};
