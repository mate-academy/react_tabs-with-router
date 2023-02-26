import React from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';

import { MainNav } from './components/MainNav/MainNav';
import { Tabs } from './components/tabs/Tabs';

export const App: React.FC = () => {
  return (
    <>
      <MainNav />

      <div className="section">
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={<h1 className="title">Home page</h1>}
            />
            <Route path="home" element={<Navigate to="/" replace />} />
            <Route path="tabs">
              <Route index element={<Tabs />} />
              <Route path=":tabId" element={<Tabs />} />
            </Route>
            <Route />
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
