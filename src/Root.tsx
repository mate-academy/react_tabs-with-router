import React from 'react';
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { App } from './App';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Tab } from './types/Tab';
import { Tabs } from './pages/Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />}></Route>
        <Route path="home" element={<Navigate to="/" />} />
        <Route path="tabs" element={<Tabs tabs={tabs} />}>
          <Route path=":tabId" element={<Tabs tabs={tabs} />}></Route>
        </Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Route>
    </Routes>
  </Router>
);
