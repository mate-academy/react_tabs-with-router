import { createRoot } from 'react-dom/client';
import { App } from './App';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import { Error } from './TypePages/Error';
import { TabsPage } from './TypePages/TypePage';
import { HomePage } from './TypePages/HomePage';

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

          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </HashRouter>
  </html>,

);
