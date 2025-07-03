import { NavLink, Outlet } from 'react-router-dom';
import classNames from 'classnames';

export const App = () => (
  <>
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand"></div>
        <NavLink
          to="/"
          end
          className={({ isActive }) => {
            return classNames('navbar-item', { 'is-active': isActive });
          }}
          style={({ isActive }) => ({ color: isActive ? 'blue' : '' })}
        >
          Home
        </NavLink>
        <NavLink
          to="/tabs"
          className={({ isActive }) => {
            return classNames('navbar-item', { 'is-active': isActive });
          }}
          style={({ isActive }) => ({ color: isActive ? 'blue' : '' })}
        >
          Tabs
        </NavLink>
      </div>
    </nav>

    <div className="section">
      <div className="container">
        <Outlet />
      </div>
    </div>
  </>
);
