import { Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';
import { RootLayout } from './components/RootLayout';
import { TabsPage } from './components/TabsPage';

export const Root = () => (
  <Routes>
    <Route path="/" element={<RootLayout />}>
      <Route index element={<h1 className="title">Home page</h1>} />

      <Route path="home" element={<Navigate to="/" replace />} />

      <Route path="tabs">
        <Route index element={<TabsPage />} />
        <Route path=":tabId" element={<TabsPage />} />
      </Route>

      <Route path="*" element={<h1 className="title">Page not found</h1>} />
    </Route>
  </Routes>
);

export default Root;
