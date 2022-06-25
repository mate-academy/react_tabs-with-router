import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className="navbar is-danger">
      <div className="navbar-brand">
        <NavLink
          to="/"
          className={isActive => `navbar-item${!isActive ? 'is-active' : ''}`}
        >
          Home
        </NavLink>

        <NavLink
          to="/tabs"
          className={isActive => `navbar-item${!isActive ? 'is-active' : ''}`}
        >
          Tabs
        </NavLink>
      </div>
    </nav>
  );
};
