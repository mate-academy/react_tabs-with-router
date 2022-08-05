import classNames from 'classnames';
import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Header:FC = () => (
  <nav className="navbar">
    <div className="container">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <span className="is-size-1">Home</span>
        </Link>
      </div>
      <div id="navbarMenuHeroB" className="navbar-menu">
        <div className="navbar-end">
          <NavLink
            to="/"
            className={({ isActive }) => classNames(
              'navbar-item',
              { 'is-active': isActive },
            )}
          >
            Home page
          </NavLink>

          <NavLink
            to="/tabs"
            className={({ isActive }) => classNames(
              'navbar-item',
              { 'is-active': isActive },
            )}
          >
            Tabs
          </NavLink>
        </div>
      </div>
    </div>
  </nav>
);
