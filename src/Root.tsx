import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { TabsPage } from './components/Tabs/Tabs';
import { HomePage } from './components/HomePage/HomePage';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="home" element={<Navigate to={'/'} replace />} />
        <Route index element={<HomePage />} />
        <Route path="tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>
        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Route>
    </Routes>
  </HashRouter>
);
