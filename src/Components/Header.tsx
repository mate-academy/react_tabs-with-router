import { NavLink, Outlet } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <>
      <nav className="navbar is-fixed-top has-background-light" data-cy="nav">
        <div className="navbar-menu">
          <div className="navbar-start">
            <NavLink
              to="/"
              className={({ isActive }) => `navbar-item${isActive ? ' is-active' : ''}`}
            >
              Home
            </NavLink>
            <NavLink
              to="/tabs"
              className={({ isActive }) => `navbar-item${isActive ? ' is-active' : ''}`}
            >
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
