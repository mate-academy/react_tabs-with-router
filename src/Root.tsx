import React from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { App } from './App';
import { TabsPage } from './pages/TabsPage';
import { HomePage } from './pages/HomePage';
import { TabsProvider } from './store/TabsContext';

export const Root = () => {
  return (
    <Router>
      <TabsProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route
              path="*"
              element={<h1 className="title">Page not found</h1>}
            />
            <Route path="home" element={<Navigate to="/" replace />} />
            <Route index element={<HomePage />} />
            <Route path="tabs">
              <Route index element={<TabsPage />} />
              <Route path=":tabId" element={<TabsPage />} />
            </Route>
          </Route>
        </Routes>
      </TabsProvider>
    </Router>
  );
};
