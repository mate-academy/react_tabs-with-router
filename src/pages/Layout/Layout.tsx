import classNames from 'classnames';
import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

function configureClassNames({ isActive }: { isActive: boolean }) {
  return classNames('navbar-item', { 'is-active': isActive });
}

export const Layout: React.FC = () => {
  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" className={configureClassNames}>
              Home
            </NavLink>
            <NavLink to="/tabs" className={configureClassNames}>
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};
