import React from 'react';
import {
  HashRouter as Router, Routes, Route, Navigate,
} from 'react-router-dom';
import { App } from './App';
import { PageNotFound } from './pages/PageNotFound';
import { HomePage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';

export const Root: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="tabs" element={<TabsPage />}>
            <Route path=":tabId?" />
          </Route>
        </Route>
        <Route path="/home" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};
