import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import cn from 'classnames';
import { Navigate, Link, Route, Routes, useLocation } from 'react-router-dom';
import { HomePage } from './components/HomePage/HomePage';
import { TabsPage } from './components/TabsPage/TabsPage';
import { NotFoundPage } from './components/NotFoundPage/NotFoundPage';

export const App = () => {
  const { pathname } = useLocation();

  const isHomeActive = pathname === '/';
  const isTabsActive = pathname === '/tabs' || pathname.startsWith('/tabs/');

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <div className={cn('navbar-item', { 'is-active': isHomeActive })}>
              <Link
                to="/"
                className={cn('navbar-item', { 'is-active': isHomeActive })}
              >
                Home
              </Link>
            </div>
            <div className={cn('navbar-item', { 'is-active': isTabsActive })}>
              <Link
                to="/tabs"
                className={cn('navbar-item', { 'is-active': isTabsActive })}
              >
                Tabs
              </Link>
            </div>
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
