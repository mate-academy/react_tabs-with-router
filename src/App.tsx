import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { TabsPage } from './TabsPage';

import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import cn from 'classnames';

const linkClass = ({ isActive }: { isActive: boolean }) =>
  cn('navbar-item', {
    'is-active': isActive,
  });

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>

          <NavLink to="/tabs" className={linkClass}>
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>
    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/">
            <Route index element={<h1 className="title">Home page</h1>} />
            <Route path="home" element={<Navigate to="/" replace />} />
            <Route path="tabs">
              <Route index element={<TabsPage />} />
              <Route path=":tabId" element={<TabsPage />} />
            </Route>
            <Route path="*" element={<p className="title">Page not found</p>} />
          </Route>
        </Routes>
      </div>
    </div>
  </>
);
