import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

import { Navigate, Route, Routes } from 'react-router-dom';

import { App } from './App';
import { HomePage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const Root: React.FC = () => (
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="/home" element={<Navigate to="/" replace />} />

      <Route path="/tabs">
        <Route index element={<TabsPage />} />
        <Route path=":selectedTabId" element={<TabsPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>
);
