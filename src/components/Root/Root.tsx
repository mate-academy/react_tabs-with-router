import React from 'react';
import {
  HashRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

import { App } from '../../App';

import { HomePage } from '../../pages/HomePage';
import { TabsPage } from '../../pages/TabsPage';
import { NotFoundPage } from '../../pages/NotFoundPage';

export const Root: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route element={<App />}>
          <Route
            path="/"
            element={<HomePage />}
          />

          <Route
            path="home"
            element={<Navigate to="/" replace />}
          />

          <Route path="tabs">
            <Route
              index
              element={<TabsPage />}
            />

            <Route
              path=":tabId"
              element={<TabsPage />}
            />
          </Route>

          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Route>
      </Routes>
    </HashRouter>
  );
};
