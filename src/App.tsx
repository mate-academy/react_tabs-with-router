import React from 'react';
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <div>
      {/* Додано data-cy="Nav" */}
      <nav
        className="navbar"
        role="navigation"
        aria-label="main navigation"
        data-cy="Nav"
      >
        <div className="navbar-menu">
          <Link
            to="/"
            className={`navbar-item ${pathname === '/' ? 'is-active' : ''}`}
          >
            Home
          </Link>
          <Link
            to="/tabs"
            className={`navbar-item ${pathname.startsWith('/tabs') ? 'is-active' : ''}`}
          >
            Tabs
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
