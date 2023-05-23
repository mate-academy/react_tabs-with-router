import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { NavLink, Outlet } from 'react-router-dom';
import classNames from 'classnames';

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
            // className="navbar-item is-active"
            className={({ isActive }) => (classNames('navbar-item', {
              'is-active': isActive,
            }))}
          >
            Home
          </NavLink>
          <NavLink
            to="/tabs"
            // className="navbar-item is-active"
            className={({ isActive }) => (classNames('navbar-item', {
              'is-active': isActive,
            }))}
          >
            Tabs
          </NavLink>
          {/* <a href="#/tabs" className="navbar-item">Tabs</a> */}
        </div>
      </div>
    </nav>

    <div className="section">
      <Outlet />
    </div>
  </>
);
