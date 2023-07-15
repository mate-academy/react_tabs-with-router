import React from 'react';
import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';

import { setActiveLink } from './helpers/setActiveLink';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

export const App: React.FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  if (pathname === '/home') {
    navigate('/');
  }

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink
              to="/"
              className={setActiveLink('navbar-item', 'is-active')}
            >
              Home
            </NavLink>

            <NavLink
              to="/tabs"
              className={setActiveLink('navbar-item', 'is-active')}
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
    </>
  );
};
