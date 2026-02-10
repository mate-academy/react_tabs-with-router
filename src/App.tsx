// src/App.tsx
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import cn from 'classnames';

import { HomePage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';
import { NotFoundPage } from './pages/PageNotFound';

export const App = () => {
  const { pathname } = useLocation();

  const isTabsActive = pathname === '/tabs' || pathname.startsWith('/tabs/');

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link
              to="/"
              className={cn('navbar-item', { 'is-active': pathname === '/' })}
            >
              Home
            </Link>

            <Link
              to="/tabs"
              className={cn('navbar-item', { 'is-active': isTabsActive })}
            >
              Tabs
            </Link>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
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
      </div>
    </>
  );
};
