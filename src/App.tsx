import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Link, useLocation, Routes, Route, Navigate } from 'react-router-dom';
import cn from 'classnames';
import { HomePage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isTabs = location.pathname.startsWith('/tabs');

  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className={cn('navbar-item', { 'is-active': isHome })}>
              Home
            </Link>
            <Link
              to="/tabs"
              className={cn('navbar-item', { 'is-active': isTabs })}
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
