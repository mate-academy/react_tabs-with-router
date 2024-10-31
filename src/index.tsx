import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { App } from './App';
import React from 'react';
import { ErrorPage } from './pages/ErrorPage';
import { TabsPage } from './pages/TabsPage';
import { HomePage } from './pages/HomePage';

createRoot(document.getElementById('root') as HTMLElement).render(
  <html className="has-navbar-fixed-top">
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>

          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </HashRouter>
  </html>,
);
