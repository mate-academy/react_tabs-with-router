import { Routes, Route, Navigate, Link, useLocation } from 'react-router-dom';

import { HomePage } from './HomePage';
import { TabsPage } from './TabsPage';
import { NotFoundPage } from './NotFoundPage';

export const App = () => {
  const { pathname } = useLocation();

  const isHome = pathname === '/';
  const isTabs = pathname.startsWith('/tabs');

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className={`navbar-item ${isHome ? 'is-active' : ''}`}>
              Home
            </Link>

            <Link
              to="/tabs"
              className={`navbar-item ${isTabs ? 'is-active' : ''}`}
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

            <Route path="/home" element={<Navigate to="/" replace />} />

            <Route path="/tabs">
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
