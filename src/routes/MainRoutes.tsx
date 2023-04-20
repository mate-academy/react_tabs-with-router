import { FC } from 'react';
import {
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { TabsPage } from '../pages/TabsPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { RoutePath } from '../utils/constants';

export const MainRoutes: FC = () => (
  <Routes>
    <Route path={RoutePath.main} element={<HomePage />} />

    <Route
      path={RoutePath.home}
      element={<Navigate to={RoutePath.main} replace />}
    />

    <Route path={RoutePath.tabs}>
      <Route index element={<TabsPage />} />

      <Route path={RoutePath.tabId} element={<TabsPage />} />
    </Route>

    <Route path={RoutePath.error} element={<NotFoundPage />} />
  </Routes>
);
