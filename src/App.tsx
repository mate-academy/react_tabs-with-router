import { Outlet, NavLink } from 'react-router-dom';
import classNames from 'classnames';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

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
              classNames('navbar-item',
                { 'is-active': isActive })
            )}
          >
            Home
          </NavLink>

          <NavLink
            to="/tabs"
            className={({ isActive }) => (
              classNames('navbar-item',
                { 'is-active': isActive })
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
