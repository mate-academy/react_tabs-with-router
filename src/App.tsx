import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { NavBar } from './NavBar/NavBar';
import { HomePage } from './HomePage/HomePage';
import { TabsPage } from './Tabs/TabsPage';
import { NotFoundPage } from './NotFoundPage/NotFoundPage';

export const App: React.FC = () => {
  return (
    <>
      <NavBar />

      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<Navigate to="/" replace />} />

            <Route path="tabs">
              <Route index element={<TabsPage />} />
              <Route path=":tabId" element={<TabsPage />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
