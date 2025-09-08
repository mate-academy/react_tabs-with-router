import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { App } from './App';
import HomePage from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';
import TabContent from './pages/TabContent';

createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<Navigate to="/" replace />} />

        <Route path="tabs" element={<TabsPage />}>
          <Route index element={<TabContent />} />
          <Route path=":tabId" element={<TabContent />} />
        </Route>

        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Route>
    </Routes>
  </HashRouter>,
);
