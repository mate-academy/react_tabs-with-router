import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation';
import { Home } from './components/Home/Home';
import { TabsPage } from './components/TabsPage/TabsPage';
import { PageNotFound } from './components/PageNotFound/PagenotFound';

import './App.scss';

export const App: React.FC = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tabs/*" element={<TabsPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};
