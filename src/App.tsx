// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import cn from 'classnames';
import { NavLink, Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <div className="has-navbar-fixed-top">
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink
              to="/"
              className={({ isActive }) =>
                cn('navbar-item', { 'is-active': isActive })
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/tabs"
              className={({ isActive }) =>
                cn('navbar-item', { 'is-active': isActive })
              }
            >
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
