import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Home, PageNotFound, Tabs } from './pages';
import { App } from './App';
import React from 'react';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="tabs">
          <Route index element={<Tabs />} />
          <Route path=":selectedTabId" element={<Tabs />} />
        </Route>
        <Route path="/home" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  </Router>
);
