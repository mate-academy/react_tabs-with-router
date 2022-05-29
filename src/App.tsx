import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage/HomePage';
import { TabsPage } from './components/TabsPage/TabsPage';
import { Navigation } from './components/Navigation/Navigation';
import { NotFoundPage } from './components/NotFoundPage/NotFoundPage';
import { tabs } from './api/tabs';

import './App.scss';

// const tabs = [
//   { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
//   { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
//   { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
// ];

const App: React.FC = () => (
  <div className="app">
    <Navigation />

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/tabs/:tabId?"
        element={
          <TabsPage tabs={tabs} />
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>

  </div>
);

export default App;
