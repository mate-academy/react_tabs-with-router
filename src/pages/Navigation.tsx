import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <>
      <html className="has-navbar-fixed-top"></html>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink
              to="/"
              className={({ isActive }) => {
                return classNames('navbar-item', { 'is-active': isActive });
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/tabs"
              className={({ isActive }) => {
                return classNames('navbar-item', { 'is-active': isActive });
              }}
            >
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};
