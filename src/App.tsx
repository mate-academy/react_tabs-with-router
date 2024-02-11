import React from 'react';
import {
  NavLink,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import classNames from 'classnames';
import { HomePage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';
import './App.scss';

import '@fortawesome/fontawesome-free/css/all.css';
import 'bulma/css/bulma.min.css';

const getLinkClass = ({ isActive }
: { isActive: boolean }) => classNames(
  'navbar-item', { 'is-active': isActive },
);

const MemoizedNavLink = React.memo(NavLink);

export const App = () => {
  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <MemoizedNavLink to="/" className={getLinkClass}>
              Home
            </MemoizedNavLink>
            <MemoizedNavLink to="/tabs" className={getLinkClass}>
              Tabs
            </MemoizedNavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="home" element={<Navigate to="/" />} />
            <Route path="tabs">
              <Route index element={<TabsPage />} />
              <Route path=":tabId" element={<TabsPage />} />
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
