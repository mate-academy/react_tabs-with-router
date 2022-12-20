import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { PageTabes } from './pages/PageTabs';

export const App: React.FC = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <Navbar />

    <div className="section">
      <div className="container">
        <Routes>
          <Route
            index
            element={(
              <h1 className="title">Home page</h1>
            )}
          />

          <Route path="home" element={<Navigate to="/" replace />} />

          <Route path="tabs">
            <Route index element={<PageTabes />} />
            <Route path=":tabId" element={<PageTabes />} />
          </Route>

          <Route
            path="*"
            element={(
              <h1 className="title">Page not found</h1>
            )}
          />
        </Routes>
      </div>
    </div>
  </>
);
