import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import classnames from 'classnames';
import {
  NavLink,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { TabsPage } from './TabsPage';

export const App = () => {
  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink
              to="/"
              className={({ isActive }) => (
                classnames('navbar-item', { 'is-active': isActive })
              )}
            >
              Home
            </NavLink>
            <NavLink
              to="/tabs"
              className={({ isActive }) => (
                classnames('navbar-item', { 'is-active': isActive })
              )}
            >
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={<h1 className="title">Home page</h1>}
            />
            <Route
              path="/home"
              element={<Navigate to="/" />}
            />

            <Route path="tabs">
              <Route
                index
                element={<TabsPage />}
              />
              <Route
                path=":tabId"
                element={<TabsPage />}
              />
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
