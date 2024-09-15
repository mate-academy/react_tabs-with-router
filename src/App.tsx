import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './style/App.scss';
import { getLinkClass } from './utils/getColor';

export const App = () => (
  <>
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className={getLinkClass}>
            Home
          </NavLink>
          <NavLink to="/tabs" className={getLinkClass}>
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>

    <div className="section">
      <Outlet />
    </div>
  </>
);
