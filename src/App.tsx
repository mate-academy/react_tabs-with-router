import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Route, Routes, Link, useLocation, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { TabsPage } from './pages/Tabs';

export const App = () => {
  const location = useLocation();

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
              className={`navbar-item ${
                location.pathname === '/' ? 'is-active' : ''
              }`}
            >
              Home
            </Link>

            <Link
              to="/tabs"
              className={`navbar-item ${
                location.pathname.startsWith('/tabs') ? 'is-active' : ''
              }`}
            >
              Tabs
            </Link>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Routes>
            <Route
              path="*"
              element={<h1 className="title">Page not found</h1>}
            />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/" element={<Home />} />
            <Route path="tabs">
              <Route index element={<TabsPage />} />
              <Route path=":tabId" element={<TabsPage />} />
            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
};
