import React from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { App } from './App';
import { TabsPage } from './pages/TabsPage';

function RedirectToRoot() {
  return <Navigate to="/" replace />;
}

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/home" element={<RedirectToRoot />} />
        <Route index element={<HomePage />} />
        <Route path="tabs/:tabId?" element={<TabsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </HashRouter>
);
