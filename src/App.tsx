import classNames from 'classnames';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { Navigate, NavLink, Route, Routes } from 'react-router-dom';

import { TabsPage } from './components/TabsPage';
import React from 'react';

export const App = () => (
  <>
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink
            to="/"
            className={({ isActive }) =>
              classNames('navbar-item', {
                'is-active': isActive,
              })
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/tabs"
            className={({ isActive }) =>
              classNames('navbar-item', {
                'is-active': isActive,
              })
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
          <Route path="/home" element={<Navigate to="/" replace />} />

          <Route path="tabs/:tabId" element={<TabsPage />} />

          <Route path="*" element={<h1 className="title">Page not found</h1>} />
        </Routes>
      </div>
    </div>
  </>
);
