import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Layout } from './components/Layout';

export const AppRouting = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route
          path="/tabs"
        >
          <Route
            index
            element={<TabsPage />}
          />

          <Route path="/tabs:tabId" element={<TabsPage />} />

        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Route>
  </Routes>
);
