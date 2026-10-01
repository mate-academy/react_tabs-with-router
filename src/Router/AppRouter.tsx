import { Navigate, Route, Routes } from 'react-router-dom';
import { HomeLayout } from '../Page/HomeLayout';
import { NotFoundPage } from '../Page/NotFoundPage';
import { TabsPage } from '../Page/TabsPage';
import { HomePage } from '../Page/HomePage';

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<HomePage />} />
        <Route path="tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route path="/home" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
