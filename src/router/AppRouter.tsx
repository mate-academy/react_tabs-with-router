import { Routes, Route, HashRouter, Navigate } from 'react-router-dom';
import { App } from '../App';
import { HomePage } from '../pages/HomePage';
import { TabsPage } from '../pages/TabsPage';
import { PageNotFound } from '../pages/PageNotFound';

const AppRouter: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="tabs">
            <Route path=":tabId?" element={<TabsPage />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
          <Route path="home" element={<Navigate to={'/'} replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export const GlobalRouter: React.FC = () => {
  return <AppRouter />;
};
