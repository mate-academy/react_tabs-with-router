import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import React, { Suspense } from 'react';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import cn from 'classnames';

const HomePage = () => <h1 className="title">Home page</h1>;
const NotFoundPage = () => <h1 className="title">Page not found</h1>;

const TabsPage = React.lazy(() =>
  import('./components/TabsPage').then(module => ({
    default: module.TabsPage,
  })),
);

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
        <NavLink
            to="/"
            className={({ isActive }) =>
              cn('navbar-item', { 'is-active': isActive })
            }
          >
            Home
        </NavLink>
        <NavLink
            to="/tabs"
            className={({ isActive }) =>
              cn('navbar-item', { 'is-active': isActive })
            }
          >
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>

    <div className="section">
      <div className="container">
      <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route index path="/" element={<HomePage />} />
            <Route path="/tabs">
              <Route index element={<TabsPage />} />
              <Route path=":tabId" element={<TabsPage />} />
            </Route>
            <Route path="/home" element={<Navigate to="/" />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  </>
);
