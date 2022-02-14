import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import classNames from 'classnames';

export const Layout: React.FC = () => (
  <div>
    <header>
      <nav className="navbar">
        <div className="navbar-brand">
          <NavLink
            to="/"
            className={({ isActive }) => classNames(
              'navbar-item is-tab', { 'is-active': isActive },
            )}
          >
            Home
          </NavLink>

          <NavLink
            to="/tabs"
            className={({ isActive }) => classNames(
              'navbar-item is-tab', { 'is-active': isActive },
            )}
          >
            Tabs
          </NavLink>
        </div>
      </nav>
    </header>

    <main>
      <div className="container pl-3 pr-3 mt-5">
        <Outlet />
      </div>
    </main>
  </div>
);
