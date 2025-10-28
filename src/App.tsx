import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Link, Outlet, useLocation } from 'react-router-dom';
import React from 'react';

const Nav: React.FC = () => {
  const { pathname } = useLocation();

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === path ? 'is-active' : '';
    }

    return pathname.startsWith(path) ? 'is-active' : '';
  };

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <span className="is-4 has-text-weight-bold">MyApp</span>
          </Link>
        </div>

        <div className="navbar-menu is-active">
          <div className="navbar-start">
            <div className={`navbar-link ${isActive('/')}`} data-cy="NavLink">
              <Link
                to="/"
                className={`navbar-link ${isActive('/')}`}
                data-cy="NavLink"
              >
                Home
              </Link>

              <Link
                to="/tabs"
                className={`navbar-link ${isActive('/tabs')}`}
                data-cy="NavLink"
              >
                Tabs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export const App: React.FC = () => (
  <>
    <Nav />

    <div className="section">
      <div className="container">
        <Outlet />
      </div>
    </div>
  </>
);
