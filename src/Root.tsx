import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { App } from './App';
import { TabsPage } from './components/TabsPage';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<h1 className="title">Home page</h1>} />
        <Route path="tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>

        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Route>
    </Routes>
  </HashRouter>
);
