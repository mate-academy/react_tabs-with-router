import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { App } from './App';
import { TabsPage } from './pages/TabsPage';
import { PageNotFound } from './pages/PageNotFound';
import { HomePage } from './pages/HomePage';
import { ErrorPageForTabs } from './pages/ErrorPageForTabs';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />

        <Route path="tabs">
          <Route path=":tabId?" element={<TabsPage />} />
          <Route path="*" element={<ErrorPageForTabs />} />
        </Route>
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </HashRouter>
);
