import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Layout } from './components/Layout';
import { TabsPage } from './components/TabsPage';
import { NotFoundPage } from './components/NotFoundPage';

import './App.scss';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => (
  <div className="App">

    <Routes>

      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="home" replace />} />
        <Route path="home" element={<h1 className="home-page">Home page</h1>} />
        <Route path="tabs/*" element={<TabsPage tabs={tabs} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>

    </Routes>
  </div>
);

export default App;
