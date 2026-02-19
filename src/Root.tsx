import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { Home } from './pages/Home';
import { TabsPage } from './pages/TabsPage';
import { NotFound } from './pages/NotFound';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />

        <Route path="tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>

        <Route path="home" element={<Navigate to="/" replace />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </HashRouter>
);
