import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { NotFound } from './components/NotFound';
import { TabsPage } from './components/TabsPage';

export const App: React.FC = () => (
  <>
    {/* Also requires <html class=\"has-navbar-fixed-top\"> */}
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Navigate to="/" replace />} />

      <Route path="/tabs">
        <Route index element={<TabsPage />} />
        <Route path=":tabId" element={<TabsPage />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);
