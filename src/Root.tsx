import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from './pages/Layout';
import { NotFound } from './pages/NotFound';
import { Home } from './pages/Home';
import { Tabs } from './pages/Tabs';

export const Root: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="tabs">
          <Route path=":tabId?" element={<Tabs />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
