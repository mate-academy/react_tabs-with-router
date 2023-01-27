import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';
import { TabPage } from './components/TabPage/TabPage';
import { HomePage } from './components/HomePage/HomePage';
import { PageNotFound } from './components/PageNotFound/PageNotFound';
import { Navigation } from './components/Navigation/Navigation';

export const App: React.FC = () => {
  return (
    <>
      <Navigation />
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/home" element={<Navigate to="/" replace />} />

            <Route path="/tabs">
              <Route index element={<TabPage />} />
              <Route path=":tabId" element={<TabPage />} />
            </Route>

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
