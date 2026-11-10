import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';
import cn from 'classnames';
import { HomePage } from './components/HomaPage';
import { TabsPage } from './components/TabsPage';

export const App = () => {
  const location = useLocation();
  const isHomeActive = location.pathname === '/';
  const isTabsActive = location.pathname.startsWith('/tabs');

  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link
              to="/"
              className={cn('navbar-item', {
                'is-active': isHomeActive,
              })}
            >
              Home
            </Link>
            <Link
              to="/tabs"
              className={cn('navbar-item', {
                'is-active': isTabsActive,
              })}
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
            <Route path="/home" element={<Navigate to="/" />} />
            <Route path="/tabs">
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
