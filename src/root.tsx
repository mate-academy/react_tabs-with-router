import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { TabsPage } from './components/TabsPage';
import { PageNotFound } from './components/PageNotFound';
import { App } from './App';
import React from 'react';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Navigate to="/" />} />

        <Route path="tabs" element={<TabsPage />}>
          <Route path=":tabId" element={<TabsPage />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </HashRouter>
);
