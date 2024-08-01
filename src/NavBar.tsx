import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
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
  );
};
