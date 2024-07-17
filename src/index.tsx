import { createRoot } from 'react-dom/client';
import { HashRouter, Navigate } from 'react-router-dom';
import { App } from './App';
import { Routes, Route } from 'react-router-dom';
import { HomePage, NotFoundPage, TabsPage } from './components';

createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="tabs" element={<TabsPage />}>
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>
        <Route path="home" element={<Navigate to="/" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </HashRouter>,
);
