import {
  NavLink, Navigate, Route, Routes,
} from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { HomePage } from './components/HomePage';
import { PageNotFound } from './components/PageNotFound';
import { TabsPage } from './components/TabsPage';

export const App = () => (
  <>
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink
            to="/"
            className={({ isActive }) => `navbar-item ${isActive && 'is-active'}`}
          >
            Home
          </NavLink>

          <NavLink
            to="/tabs"
            className={({ isActive }) => `navbar-item ${isActive && 'is-active'}`}
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
            element={<HomePage />}
          />

          <Route path="/tabs">
            <Route
              path=":tabId?"
              element={<TabsPage />}
            />
          </Route>

          <Route path="/home" element={<Navigate to="/" />} />

          <Route
            path="*"
            element={<PageNotFound />}
          />
        </Routes>
      </div>
    </div>
  </>
);
