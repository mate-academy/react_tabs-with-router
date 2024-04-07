import { createRoot } from 'react-dom/client';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';
import { App } from './App';
import { ErrorPage } from './pages/ErrorPage';

createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="*" element={<ErrorPage />} />
        <Route path="home" element={<Navigate to="/" />} />
        <Route index element={<HomePage />} />
        <Route path="tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>
      </Route>
    </Routes>
  </HashRouter>,
);
