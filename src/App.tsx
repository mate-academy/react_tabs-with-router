import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  NavLink, Navigate, Route, Routes,
} from 'react-router-dom';
import classNames from 'classnames';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';
import { PageNotFound } from './components/PageNotFound';

export const App = () => (
  <>
    <html lang="en" className="has-navbar-fixed-top">
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink
              to="/"
              className={({ isActive }) => classNames('navbar-item',
                { 'is-active': isActive })}
            >
              Home

            </NavLink>
            <NavLink
              to="/tabs"
              className={({ isActive }) => classNames('navbar-item',
                { 'is-active': isActive })}
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
            <Route path="/tabs" element={<TabsPage />}>
              <Route path=":tabId" element={<TabsPage />} />
            </Route>
            <Route path="/home" element={<Navigate to="/" />} />
            <Route path="*" element={<PageNotFound />} />

          </Routes>
        </div>
      </div>
    </html>
  </>
);
