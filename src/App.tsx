import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { MainNav } from './MainNav';
import { TabsPage } from './TabsPage';

export const App: React.FC = () => {
  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <MainNav />

      <div className="section">
        <Routes>
          <Route
            path="/"
            element={(
              <div className="container">
                <h1 className="title">Home page</h1>
              </div>
            )}
          />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="tabs">
            <Route
              index
              element={(
                <TabsPage />
              )}
            />
            <Route
              path=":tabId"
              element={(
                <TabsPage />
              )}
            />
          </Route>
          <Route
            path="*"
            element={(
              <div className="container">
                <h1 className="title">Page not found</h1>
              </div>
            )}
          />
        </Routes>
      </div>
    </>
  );
};
