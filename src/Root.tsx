import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { App } from './App';
import { HomePage } from './Pages/HomePage';

import { TabItem } from './components/TabItem';
import { TabsPage } from './Pages/TabsPage';

export const Root: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="tabs/" element={<TabsPage />}>
            <Route path=":tabsId?" element={<TabItem />} />
          </Route>
        </Route>
        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Routes>
    </HashRouter>
  );
};
