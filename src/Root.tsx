import { HashRouter, Navigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { TabsPage } from './pages/TabsPage';
import { App } from './App';
import { NotFoundPage } from './components/NotFoundPage';

export const Root = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />

          <Route path="home" element={<Navigate to="/" replace />} />

          <Route path="tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
