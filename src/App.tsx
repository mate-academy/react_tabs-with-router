import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { Routes, Route, Navigate, Link, useLocation } from 'react-router-dom';
import { HomePage } from './HomePage';
import { TabsPage } from './TabsPage';
import { NotFoundPage } from './NotFoundPage';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <div className="navbar-item">
            <Link
              to="/"
              className={location.pathname === '/' ? 'is-active' : ''}
            >
              Home
            </Link>
          </div>

          <div className="navbar-item">
            <Link
              to="/tabs"
              className={
                location.pathname.startsWith('/tabs') ? 'is-active' : ''
              }
            >
              Tabs
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export const App = () => (
  <>
    <Navigation />
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
