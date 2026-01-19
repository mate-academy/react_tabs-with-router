import { Navigate, Route, Routes, HashRouter } from 'react-router-dom';
import { App } from './App';
import { Home } from './components/Home';
import { TabsPage } from './pages/TabsPage';
import { NotFoundPage } from './components/NotFoundPage';

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

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </HashRouter>
);
