import React from 'react';
import {
  HashRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { App } from '../App';
import { TabsPage } from './TabsPage';
import { ErrorPage } from './ErrorPage';
import { Home } from './Home';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const Root: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />

          <Route path="/home" element={<Navigate to="/" replace />} />

          <Route path="tabs">
            <Route index element={<TabsPage tabs={tabs} />} />

            <Route path=":tabId" element={<TabsPage tabs={tabs} />} />
          </Route>

          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
