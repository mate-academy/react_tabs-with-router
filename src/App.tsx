import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import 'bulma';
import '@fortawesome/fontawesome-free/css/all.css';

import { Layout } from './components/Layout/Layout';
import { HomePage } from './components/HomePage/HomePage';
import { TabsPage } from './components/TabsPage/TabsPage';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route
        path="home"
        element={
          <Navigate to="/" replace />
        }
      />
      <Route path="tabs" element={<TabsPage tabs={tabs} />} />
      <Route path="tabs/:id" element={<TabsPage tabs={tabs} />} />
      <Route path="*" element={<p>Page not found</p>} />
    </Route>
  </Routes>
);

export default App;
