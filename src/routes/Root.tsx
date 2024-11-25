import { Navigate, HashRouter, Routes, Route } from 'react-router-dom';
import { App } from '../App';
import { ErrorPage } from '../components/ErrorPage';
import { TabsPage } from '../components/TabsPage';
import { HomePage } from '../components/HomePage';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/home" element={<Navigate to="/" />} />
        <Route index element={<HomePage />} />
        <Route path="tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  </HashRouter>
);
