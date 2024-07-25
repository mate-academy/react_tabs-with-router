import React from 'react';
import { Navigate, HashRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { App } from './App';
import { Tabs } from './components/Tabs';

export const Root: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<h1 className="title">Home page</h1>} />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="tabs">
          <Route path=":id?" element={<Tabs />} />
        </Route>
        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Route>
    </Routes>
  </Router>
);
