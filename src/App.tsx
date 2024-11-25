import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import React from 'react';
import { HomePage } from './HomePage/HomePage';
import { TabsPage } from './TabsPage/TabsPage';
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { NotFoundPage } from './NotFoundPage/NotFoundPage';
import { Navigation } from './Navigation/Navigation';

export const App = () => (
  <>
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="tabs" element={<TabsPage />}>
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  </>
);
