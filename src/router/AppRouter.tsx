import { Routes, Route, HashRouter, Navigate } from 'react-router-dom';
import { App } from '../App';
import { HomePage } from '../pages/HomePage';
import { TabsPage } from '../pages/TabsPage';
import { PageNotFound } from '../pages/PageNotFound';

const AppRouter: React.FC = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />

        <Route path="tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>

        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </HashRouter>
);

export const GlobalRouter: React.FC = () => <AppRouter />;
