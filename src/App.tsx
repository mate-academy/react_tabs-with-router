import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Nav } from './components/Nav';
import { HomePage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';
import './App.scss';

const tabs = [
  { id: 'tab-1', title: 'Tab1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab3', content: 'Some text 3' },
];

export const App: React.FC = () => (
  <div className="app">
    <Nav />

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tabs/:tabId" element={<TabsPage tabs={tabs} />} />
      <Route path="/tabs" element={<TabsPage tabs={tabs} />} />
    </Routes>
  </div>
);
