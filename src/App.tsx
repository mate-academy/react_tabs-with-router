import React from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from '../src/components/Layout';
import { HomePage } from '../src/components/HomePage';
import { TabsPage } from './components/TabsPage';
import { NotFoundPage } from '../src/components/NotFoundPage';

export const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />

      <Route path="home" element={<Navigate to="/" replace />} />

      <Route path="tabs">
        <Route index element={<TabsPage />} />
        <Route path=":tabId" element={<TabsPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>
);
