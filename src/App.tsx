import React from 'react';
import 'bulma';
import './App.scss';
import { Route, Routes, Navigate } from 'react-router-dom';
import { MainNavigation } from './components/MainNavigation';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => (
  <div className="App">
    <MainNavigation />

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="home" element={<Navigate to="/" />} />
      <Route path="tabs" element={<TabsPage tabs={tabs} />} />
      <Route path="tabs/:tabId" element={<TabsPage tabs={tabs} />} />
      <Route
        path="*"
        element={(
          <h3 className="title is-3">
            Page not found
          </h3>
        )}
      />
    </Routes>
  </div>
);

export default App;
