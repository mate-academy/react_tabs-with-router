import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  Routes, Route, Navigate, NavLink,
} from 'react-router-dom';
import classNames from 'classnames';
import { Home } from './components/Home';
import { TabsPage } from './components/TabsPage';
import { PageNotFound } from './components/PageNotFound';

export const App = () => (
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
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>

  </html>
);
