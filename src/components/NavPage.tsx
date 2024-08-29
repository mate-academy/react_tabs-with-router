import cn from 'classnames';
import { NavLink } from 'react-router-dom';

export const NavPage = () => {
  return (
    <div className="navbar-brand">
      <NavLink
        to="/"
        className={({ isActive }) => {
          return cn('navbar-item', { 'is-active': isActive });
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/tabs"
        className={({ isActive }) => {
          return cn('navbar-item', { 'is-active': isActive });
        }}
      >
        Tabs
      </NavLink>
    </div>
  );
};
