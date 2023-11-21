import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import React from 'react';
import {
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { Navigation } from './Navigation';
import { TabsPage } from './Components/TabsPage';

export const App: React.FC = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <Navigation />
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
          <Route
            path="/home"
            element={
              <Navigate to="/" />
            }
          />
          <Route path="tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>
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
