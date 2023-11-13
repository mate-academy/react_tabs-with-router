import React from 'react';
import cn from 'classnames';
import {
  NavLink,
  Navigate,
  Outlet,
  useParams,
} from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const { path } = useParams();

  if (path === 'home') {
    return <Navigate to="/" />;
  }

  return (
    <React.Component>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink
              to="/"
              className={({ isActive }) => cn(
                'navbar-item',
                { 'is-active': isActive },
              )}
            >
              Home
            </NavLink>
            <NavLink
              to="/tabs"
              className={({ isActive }) => cn(
                'navbar-item',
                { 'is-active': isActive },
              )}
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
    </React.Component>
  );
};
