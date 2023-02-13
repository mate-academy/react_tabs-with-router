import {
  NavLink, Route, Navigate, Routes,
} from 'react-router-dom';
import classNames from 'classnames';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { TabsPage } from './component/Tabs';

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
              className={({ isActive }) => (
                classNames(
                  'navbar-item',
                  {
                    'is-active': isActive,
                  },
                )
              )}
              to="/"
            >
              Home
            </NavLink>

            <NavLink
              className={({ isActive }) => (
                classNames(
                  'navbar-item',
                  {
                    'is-active': isActive,
                  },
                )
              )}
              to="/tabs"
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
              element={
                <h1 className="title">Home page</h1>
              }
            />

            <Route path="/tabs" element={<TabsPage />}>
              <Route path=":tabId" element={<TabsPage />} />
            </Route>

            <Route
              path="/home"
              element={<Navigate to="/" />}
            />
            <Route
              path="*"
              element={
                <h1 className="title">Page not found</h1>
              }
            />
          </Routes>
        </div>
      </div>
    </>
  );
};
