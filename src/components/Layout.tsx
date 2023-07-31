import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import cn from 'classnames';

const Layout:React.FC = () => {
  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink
              to="/"
              className={({ isActive }) => cn('navbar-item', {
                'is-active': isActive,
              })}
            >
              Home
            </NavLink>
            <NavLink
              to="/tabs"
              className={({ isActive }) => cn('navbar-item', {
                'is-active': isActive,
              })}
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

export default Layout;
