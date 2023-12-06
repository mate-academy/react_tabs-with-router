import {
  HashRouter, Navigate, Route, Routes,
} from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { App } from './App';
import { TabsPage } from './components/TabsPage';
import { NotFoundPage } from './components/NotFoundPage';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route path="/home" element={<Navigate to="/" />} />
    </Routes>
  </HashRouter>
);
