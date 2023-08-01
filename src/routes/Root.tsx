import React from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { App } from '../App';
import { Tabs } from '../components/Tabs';
import { Home } from '../components/Home';
import { NotFound } from '../components/NotFound';

export const Root: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Navigate to="/" />} />
        <Route path="tabs">
          <Route index element={<Tabs />} />
          <Route path=":tabId" element={<Tabs />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </Router>
);
