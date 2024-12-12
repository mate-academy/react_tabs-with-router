import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import { App } from './App';
import { Home } from './components/Home';
import { NotFoundPage } from './components/NotFound';
import { Tabs } from './components/Tabs';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Navigate to="/" replace />} />

        <Route path="tabs">
          <Route path=":tabId?" element={<Tabs />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </HashRouter>
);
