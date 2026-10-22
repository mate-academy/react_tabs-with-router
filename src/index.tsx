import { createRoot } from 'react-dom/client';
import { HashRouter, Navigate } from 'react-router-dom';
import { App } from './App';
import { Route, Routes } from 'react-router-dom';
import { ErrorPage } from './pages/ErrorPage';
import { TabsPage } from './pages/TabsPage';
import { HomePage } from './pages/HomePage';
createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="/tabs/:tabId?" element={<TabsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  </HashRouter>,
);
