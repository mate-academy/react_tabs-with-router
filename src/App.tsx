import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Routes, Route, Navigate, useLocation, Link } from 'react-router-dom';
import { NotFoundPage } from './pages/NotFoundPage';
import { HomePage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';

export const App = () => {
  const location = useLocation();

  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="navbar-brand">
          <div
            className={
              location.pathname === '/'
                ? 'navbar-item is-active'
                : 'navbar-item'
            }
          >
            <Link
              to="/"
              className={location.pathname === '/' ? 'is-active' : ''}
            >
              Home
            </Link>
          </div>

          <div
            className={
              location.pathname.startsWith('/tabs')
                ? 'navbar-item is-active'
                : 'navbar-item'
            }
          >
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
      </nav>

      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
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
