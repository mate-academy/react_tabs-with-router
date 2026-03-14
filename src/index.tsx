import { createRoot } from 'react-dom/client';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import { App, TabContent, TabsPage } from './App';

createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={null} />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="tabs" element={<TabsPage />}>
          <Route
            index
            element={<div className="block">Please select a tab</div>}
          />
          <Route path=":tabId" element={<TabContent />} />
        </Route>

        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Route>
    </Routes>
  </HashRouter>,
);
