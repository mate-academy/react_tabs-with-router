import classNames from 'classnames';
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const NavBar: React.FC = () => {
  return (
    <>
      <nav
        className={classNames(
          'navbar',
          'is-light',
          'is-fixed-top',
          'is-mobile',
          'has-shadow',
          'has-navbar-fixed-top',
        )}
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                classNames('navbar-item', { 'is-active': isActive })
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/tabs"
              className={({ isActive }) =>
                classNames('navbar-item', { 'is-active': isActive })
              }
            >
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
