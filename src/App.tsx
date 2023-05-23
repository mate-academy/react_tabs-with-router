import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import classnames from 'classnames';
import {
  Routes, Route, useLocation, Navigate, NavLink,
} from 'react-router-dom';
import TabsPage from './Pages/TabsPage';

export const App = () => {
  const { pathname } = useLocation();

  return (
    <div className="has-navbar-fixed-top">
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink
              to="/"
              className={classnames('navbar-item', {
                'is-active': pathname === '/',
              })}
            >
              Home
            </NavLink>
            <NavLink
              to="/tabs"
              className={({ isActive }) => (
                classnames('navbar-item', {
                  'is-active': isActive,
                })
              )}
            >
              Tabs
            </NavLink>
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
