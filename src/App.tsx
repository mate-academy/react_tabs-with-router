import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage/HomePage';
import { TabsPage } from './components/TabsPage/TabsPage';
import { Navigation } from './components/Navigation/Navigation';
import { NotFoundPage } from './components/NotFoundPage/NotFoundPage';
import { tabs } from './api/tabs';

import './App.scss';

const App: React.FC = () => (
  <div className="app">
    <Navigation />

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/tabs/"
        element={<TabsPage tabs={tabs} />}
      >
        <Route
          path=":tabId"
          element={<TabsPage tabs={tabs} />}
        />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </div>
);

export default App;
