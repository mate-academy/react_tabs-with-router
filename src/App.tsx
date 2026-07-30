import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import React from 'react';
import { Routes, Route, Navigate, Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import { TabsPage } from './pages/TabsPage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <div className="container">
      <nav
        data-cy="Nav"
        className="navbar"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link
            to="/"
            className={classNames('navbar-item', {
              'is-active': pathname === '/',
            })}
          >
            Home
          </Link>

          <Link
            to="/tabs"
            className={classNames('navbar-item', {
              'is-active': pathname.startsWith('/tabs'),
            })}
          >
            Tabs
          </Link>
        </div>
      </nav>

      <div className="section">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" replace />} />

          <Route path="tabs" element={<TabsPage />}>
            <Route path=":tabId?" element={<TabsPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
};
