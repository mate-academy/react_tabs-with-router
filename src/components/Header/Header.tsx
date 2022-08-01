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
            className={({ isActive }) => {
              return (isActive ? 'navbar-item is-active' : 'navbar-item');
            }}
          >
            Home page
          </NavLink>

          <NavLink
            to="/tabs"
            className={({ isActive }) => {
              return (isActive ? 'navbar-item is-active' : 'navbar-item');
            }}
          >
            Tabs
          </NavLink>
        </div>
      </div>
    </div>
  </nav>
);
