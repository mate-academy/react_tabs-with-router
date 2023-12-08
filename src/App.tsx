import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Outlet, NavLink } from 'react-router-dom';

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink
            to="/"
            className={({ isActive }) => (
              `navbar-item ${isActive ? 'is-active' : ''}`
            )}
          >
            Home
          </NavLink>

          <NavLink
            to="/tabs"
            className={({ isActive }) => (
              `navbar-item ${isActive ? 'is-active' : ''}`
            )}
          >
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>

    <Outlet />
  </>
);
