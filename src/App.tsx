import React from 'react';

import './App.scss';

import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { HomePage } from './components/HomePage/HomePage';
import { PageNotFound } from './components/PageNotFound/PageNotFound';
import { TabsPage } from './components/TabsPage/TabsPage';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => (
  <>
    <Header />

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tabs/" element={<TabsPage tabs={tabs} />}>
        <Route path=":tabId" element={<TabsPage tabs={tabs} />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </>
);

export default App;
