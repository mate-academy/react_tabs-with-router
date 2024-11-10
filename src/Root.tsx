import { HashRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';
import { App } from './App';
import { NotFoundPage } from './pages/NotFoundPage';
import { Navigate } from 'react-router-dom';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="*" element={<NotFoundPage />} />

        <Route path="/home" element={<Navigate to="/" replace={true} />} />

        <Route index element={<HomePage />} />
        <Route path="tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>
      </Route>

      <Route path="*" action={() => <Navigate to="/" />} />
    </Routes>
  </HashRouter>
);
