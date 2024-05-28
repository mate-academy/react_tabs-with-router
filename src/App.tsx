import React from 'react';
import classNames from 'classnames';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

import './App.scss';

interface NavBarLink {
  isActive: boolean;
}

const getNavBarClasses = ({ isActive }: NavBarLink) =>
  classNames('navbar-item', {
    'is-active': isActive,
  });

export const App: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" className={getNavBarClasses}>
              Home
            </NavLink>
            <NavLink to="/tabs" className={getNavBarClasses}>
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          {pathname === '/' ? <h1 className="title">Home page</h1> : <Outlet />}
        </div>
      </div>
    </>
  );
};
