import React from 'react';
import { Routes, Route, Navigate, NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { TabsPage } from './pages/TabsPage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  const getNavClass = ({ isActive }: { isActive: boolean }) =>
    classNames('navbar-item', {
      'is-active': isActive,
    });

  return (
    <div className="container">
      <nav
        data-cy="Nav"
        className="navbar"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <NavLink to="/" className={getNavClass}>
            Home
          </NavLink>

          <NavLink to="/tabs" className={getNavClass}>
            Tabs
          </NavLink>
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
