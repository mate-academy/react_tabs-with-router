import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import React from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import classNames from 'classnames';

export const App: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <div className="container">
      <nav
        data-cy="Nav"
        className="navbar"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link
            to="/"
            className={classNames('navbar-item', {
              'is-active': pathname === '/',
            })}
          >
            Home
          </Link>

          <Link
            to="/tabs"
            className={classNames('navbar-item', {
              'is-active': pathname.startsWith('/tabs'),
            })}
          >
            Tabs
          </Link>
        </div>
      </nav>

      <div className="section">
        <Outlet />
      </div>
    </div>
  );
};
