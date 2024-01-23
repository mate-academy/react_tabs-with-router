import {
  HashRouter, Routes, Route, Navigate,
} from 'react-router-dom';

import { Homepage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';
import { App } from './App';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Homepage />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="tabs">
          <Route path=":tabId?" element={<TabsPage />} />
        </Route>
        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Route>
    </Routes>
  </HashRouter>
);
