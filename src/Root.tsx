import React from 'react';
import {
  HashRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

import { App } from './App';

import { HomePage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';
import { NotFoundPage } from './pages/NotFoundPage';

import { TabContent } from './components/TabsContent';

export const Root: React.FC = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />

        <Route path="tabs" element={<TabsPage />}>
          <Route index element={<TabContent />} />
          <Route path=":tabId" element={<TabContent />} />
        </Route>

        <Route path="home" element={<Navigate to="/" />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </HashRouter>
);
