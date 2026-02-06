import { createRoot } from 'react-dom/client';
import { App } from './App';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { AppPath } from './types/paths';
import TabsPage from './pages/TabPages/TabsPage';
import NoAppPage from './pages/NoAppPage';

createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <Routes>
      <Route path={AppPath.HOME} element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<Navigate to={AppPath.HOME} />} />
        <Route path={AppPath.TABS} element={<TabsPage />}>
          <Route path=":tabId" element={<TabsPage />} />
        </Route>
        <Route path="*" element={<NoAppPage />} />
      </Route>
    </Routes>
  </HashRouter>,
);
