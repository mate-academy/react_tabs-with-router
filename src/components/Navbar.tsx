import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive
              ? 'navbar-item is-active' : 'navbar-item')}
          >
            Home

          </NavLink>
          <NavLink
            to="/tabs"
            className={({ isActive }) => (isActive
              ? 'navbar-item is-active' : 'navbar-item')}
          >
            Tabs

          </NavLink>
        </div>
      </div>
    </nav>
  );
};
