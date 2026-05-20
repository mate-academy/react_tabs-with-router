import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { TabsPage } from './pages/TabsPage';

export const App = () => {
  const { pathname } = useLocation();
  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <ul className="navbar-start">
              <li
                className={classNames({
                  'is-active': pathname === '/',
                })}
              >
                <Link
                  className={classNames('navbar-item', {
                    'is-active': pathname === '/',
                  })}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li
                className={classNames({
                  'is-active': pathname.startsWith('/tabs'),
                })}
              >
                <Link
                  className={classNames('navbar-item', {
                    'is-active': pathname.startsWith('/tabs'),
                  })}
                  to="/tabs"
                >
                  Tabs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="section">
        <div className="container">
          <Routes>
            <Route path="home" element={<Navigate to="/" replace />} />
            <Route
              path=""
              element={
                <div className="section">
                  <div className="container">
                    <h1 className="title">Home page</h1>
                  </div>
                </div>
              }
            />
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
        </div>
      </div>
    </>
  );
};
