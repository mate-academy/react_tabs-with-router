import React from 'react';
import {
  Routes,
  Route,
  Navigate,
  HashRouter,
} from 'react-router-dom';
import { App } from './App';
import { HomePage } from './Pages/HomePage';
import { TabsPage } from './Pages/TabsPage';
import { TabItem } from './components/TabItem';

export const Root: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="tabs/*" element={<TabsPage />}>
            <Route path=":tabsId" element={<TabItem />} />
          </Route>
          <Route path="home" element={<Navigate to="/" />} />
        </Route>
        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Routes>
    </HashRouter>
  );
};
