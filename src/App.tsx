import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import classnames from 'classnames';
import {
  Routes, Link, Route, useLocation, Navigate,
} from 'react-router-dom';
import TabsPage from './components/TabsPage';

export const App = () => {
  const { pathname } = useLocation();

  const isTabActive = (tabId: string) => {
    return pathname.startsWith('/tabs') || pathname.includes(tabId);
  };

  return (
    <div className="has-navbar-fixed-top">
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link
              to="/"
              className={classnames('navbar-item', {
                'is-active': pathname === '/',
              })}
            >
              Home
            </Link>
            <Link
              to="/tabs"
              className={classnames('navbar-item', {
                'is-active': isTabActive('/tabs'),
              })}
            >
              Tabs
            </Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route
          path="/"
          element={(
            <div className="section">
              <div className="container">
                <h1 className="title">Home page</h1>
              </div>
            </div>
          )}
        />
        <Route
          path="/home"
          element={<Navigate to="/" replace />}
        />
        <Route
          path="tabs/*"
          element={(
            <div className="section">
              <div className="container">
                <Routes>
                  <Route index element={<TabsPage />} />
                  <Route path=":tabId" element={<TabsPage />} />
                </Routes>
              </div>
            </div>
          )}
        />
        <Route
          path="*"
          element={<h1 className="title">Page not found</h1>}
        />
      </Routes>
    </div>
  );
};
