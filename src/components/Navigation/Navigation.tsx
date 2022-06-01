import { FC } from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation: FC = () => (
  <div className="navbar has-shadow">
    <nav className="navbar-brand">
      <NavLink
        to="/"
        className={({ isActive }) => (
          isActive ? 'navbar-item--active navbar-item' : 'navbar-item')}
      >
        Home
      </NavLink>
      <NavLink
        to="/tabs"
        className={({ isActive }) => (
          isActive ? 'navbar-item--active navbar-item' : 'navbar-item')}
      >
        Tabs
      </NavLink>
    </nav>
  </div>
);
