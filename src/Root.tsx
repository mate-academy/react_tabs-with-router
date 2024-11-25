import React from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import { App } from './App';
import { TabsPage } from './pages/TabsPage';

export const Root: React.FC = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="home" element={<Navigate to="/" />} />
        <Route path="tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>
        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Route>
    </Routes>
  </HashRouter>
);
