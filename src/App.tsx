import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import {
  HashRouter,
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';

import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';
import { NotFoundPage } from './components/NotFoundPage';

export const App = () => {
  const location = useLocation();

  const isHomeActive = location.pathname === '/' || location.pathname === '/home';
  const isTabsActive = location.pathname.startsWith('/tabs');

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
              className={`navbar-item ${isHomeActive ? 'is-active' : ''}`}
            >
              Home
            </Link>

            <Link
              to="/tabs"
              className={`navbar-item ${isTabsActive ? 'is-active' : ''}`}
            >
              Tabs
            </Link>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Routes>
            {/* Home */}
            <Route path="/" element={<HomePage />} />

            {/* redirect /home -> / */}
            <Route path="/home" element={<Navigate to="/" replace />} />

            {/* Tabs (ВАЖНО: без /) */}
            <Route path="tabs">
              <Route index element={<TabsPage />} />
              <Route path=":tabId" element={<TabsPage />} />
            </Route>

            {/* 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
};