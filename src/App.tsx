import React from 'react';
import { Routes, Route } from 'react-router';

import './App.scss';

import Nav from './components/Nav';
import HomePage from './components/HomePage';
import TabsPage from './components/TabsPage';
import NotFoundPage from './components/NotFoundPage';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="container">
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<HomePage />} />

            <Route path="/tabs">
              <Route index element={<TabsPage tabs={tabs} />} />
              <Route path=":tabId" element={<TabsPage tabs={tabs} />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
