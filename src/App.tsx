import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import React from 'react';
import { NavLink, Navigate, useLocation, Outlet } from 'react-router-dom';
import classNames from 'classnames';

export const App = () => {
  const getClassLink = ({ isActive }: { isActive: boolean }) => {
    return classNames('navbar-item', { 'is-active': isActive });
  };

  const { pathname } = useLocation();

  if (pathname === '/home') {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" className={getClassLink}>
              Home
            </NavLink>
            <NavLink to="/tabs" className={getClassLink}>
              Tabs
            </NavLink>
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
