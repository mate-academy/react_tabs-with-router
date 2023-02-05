import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { TabPage } from './Pages/TabPage';
import { HomePage } from './Pages/HomePage';
import { NotFoundPage } from './Pages/NotFoundPage';
import { Navbar } from './components/Navbar';

export const App: React.FC = () => {
  return (
    <>
      <Navbar />
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

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
