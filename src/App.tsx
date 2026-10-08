import React from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import cn from 'classnames';
import './App.scss';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

import { TabsPage } from './pages/TabsPage';

export const App: React.FC = () => {
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
              end
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
          <Routes>
            <Route path="/" element={<h1 className="title">Home page</h1>} />

            <Route path="home" element={<Navigate to="/" replace />} />

            <Route path="tabs">
              <Route index element={<TabsPage />} />
              <Route path=":tabId" element={<TabsPage />} />
            </Route>

            <Route
              path="*"
              element={<h1 className="title">Page not found</h1>}
            />
          </Routes>
        </div>
      </div>
    </>
  );
};
