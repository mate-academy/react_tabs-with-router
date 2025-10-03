import { HashRouter, Navigate } from 'react-router-dom';
import { App } from '../App';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { TabsPage } from '../pages/TabsPage';
import { TabProvider } from '../TabContext';
import React from 'react';

export const Root: React.FC = () => (
  <HashRouter>
    <TabProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>
          <Route path="*" element={<h1 className="title">Page not found</h1>} />
        </Route>
      </Routes>
    </TabProvider>
  </HashRouter>
);
