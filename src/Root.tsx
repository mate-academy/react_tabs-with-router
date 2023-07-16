import React from 'react';
import {
  HashRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import { App } from './App';
import { HomePage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';
import { Page404 } from './pages/Page404';

export const Root: React.FC = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route
          index
          element={<HomePage />}
        />

        <Route
          path="home"
          element={<Navigate to="/" replace />}
        />

        <Route
          path="tabs"
        >
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>

        <Route
          path="*"
          element={<Page404 />}
        />
      </Route>
    </Routes>
  </HashRouter>
);
