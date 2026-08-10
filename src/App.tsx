import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { TabsPage } from './pages/TabsPage';
import { HomePage } from './pages/HomePage';

export const App: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
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
        <Route path="/tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>
      </Routes>
    </div>
  );
};
