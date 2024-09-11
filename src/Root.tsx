import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { Home } from './components/Home';
import { TabsPage } from './components/TabsPage';

export const Root: React.FC = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>
        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Route>
    </Routes>
  </HashRouter>
);
