import { FC } from 'react';
import {
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { TabsPage } from '../pages/TabsPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { PATH } from '../types';

export const MainRoutes: FC = () => (
  <Routes>
    <Route path={PATH.Main} element={<HomePage />} />
    <Route path={PATH.Home} element={<Navigate to={PATH.Main} replace />} />

    <Route path={PATH.Tabs}>
      <Route index element={<TabsPage />} />
      <Route path={PATH.TAB_ID} element={<TabsPage />} />
    </Route>

    <Route path={PATH.Error} element={<NotFoundPage />} />
  </Routes>
);
