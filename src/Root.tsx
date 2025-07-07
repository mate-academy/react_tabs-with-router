import { App } from './App';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { TabsPage } from './pages/TabsPage';
import { NotFound } from './pages/NotFound';
import { HomePage } from './pages/HomePage';
import { Navigate } from 'react-router-dom';

export const Root = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
