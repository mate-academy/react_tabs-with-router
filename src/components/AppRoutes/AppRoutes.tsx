import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from '../../pages/HomePage';
import { NotFoundPage } from '../../pages/NotFoundPage';
import { TabsPage } from '../../pages/TabsPage';

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="home" element={<Navigate to="/" replace />} />
    <Route path="tabs">
      <Route index element={<TabsPage />} />
      <Route path=":tabId" element={<TabsPage />} />
    </Route>
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);
