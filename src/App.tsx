import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  NavLink, Navigate, Route, Routes,
} from 'react-router-dom';
import classNames from 'classnames';
import { HomePage } from './pages/HomePage/HomePage';
import { TabsPage } from './pages/TabsPage/TabsPage';
import { PageNotFound } from './pages/PageNotFound/PageNotFound';

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
            className={({ isActive }) => classNames(
              'navbar-item', { 'is-active': isActive },
            )}
          >
            Home
          </NavLink>

          <NavLink
            to="/tabs"
            className={({ isActive }) => classNames(
              'navbar-item', { 'is-active': isActive },
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
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>

      </div>
    </div>
  </>
);
