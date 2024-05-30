import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import { HomePage, TabsPage, Page404 } from './pages';
import { App } from './App';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="tabs/:tabId?" element={<TabsPage />} />
        <Route path="home" element={<Navigate to={'/'} replace />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  </HashRouter>
);
