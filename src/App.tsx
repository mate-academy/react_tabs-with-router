import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';

import { TabsPage } from './pages/TabsPage';

export const App = () => {
  const location = useLocation();
  const currentPath = location.pathname;

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
              className={
                currentPath === '/' ? 'navbar-item is-active' : 'navbar-item'
              }
            >
              Home
            </Link>

            <Link
              to="/tabs"
              className={
                currentPath === '/tabs' || currentPath.startsWith('/tabs/')
                  ? 'navbar-item is-active'
                  : 'navbar-item'
              }
            >
              Tabs
            </Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <div className="section">
              <div className="container">
                <h1 className="title">Home page</h1>
              </div>
            </div>
          }
        />

        <Route path="/home" element={<Navigate to="/" replace />} />

        <Route path="tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>

        <Route
          path="*"
          element={
            <div className="section">
              <div className="container">
                <h1 className="title">Page not found</h1>
              </div>
            </div>
          }
        />
      </Routes>
    </>
  );
};
