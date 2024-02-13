import { NavLink } from 'react-router-dom';

export const Nav = () => (
  <nav
    className="navbar is-light is-fixed-top is-mobile has-shadow"
    data-cy="Nav"
  >
    <div className="container">
      <div className="navbar-brand">
        <NavLink
          to="/"
          className={({ isActive }) => `navbar-item ${isActive ? 'is-active' : ''}`}
        >
          Home
        </NavLink>
        <NavLink
          to="/tabs"
          className={({ isActive }) => `navbar-item ${isActive ? 'is-active' : ''}`}
        >
          Tabs
        </NavLink>
      </div>
    </div>
  </nav>
);
