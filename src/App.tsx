import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { Navigate, Route, Routes } from 'react-router-dom';
import React from 'react';
import { Home } from './components/Pages/Home';
import { NotFound } from './components/Pages/NotFound';
import { TabsPage } from './components/Pages/TabsPage';
import { Navbar } from './components/NavBar/Navbar';

export const App: React.FC = () => (
  <>
    <Navbar />
    <div className="section">
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/home"
            element={<Navigate to="/" replace />}
          />

          <Route path="tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  </>
);
