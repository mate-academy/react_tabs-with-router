import {
  HashRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import React from 'react';
import { App } from './App';
import { TabsPage } from './components/TabsPage';
import { HomePage } from './components/HomePage';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="/home" element={<Navigate to="/" />} />

        <Route path="tabs" element={<TabsPage />}>
          <Route path=":tabId" element={<TabsPage />} />
        </Route>

        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Route>
    </Routes>
  </Router>
);
