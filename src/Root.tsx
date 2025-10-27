import { Routes, Route, Navigate } from 'react-router-dom';
import { App } from './App';
import HomePage from './pages/HomePage';
import TabsPage from './pages/TabsPage';
import NotFoundPage from './pages/NotFoundPage';

const Root = () => (
  <App>
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="home" element={<Navigate to="/" />} />
      <Route path="tabs">
        <Route index element={<TabsPage />} />
        <Route path=":tabId" element={<TabsPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </App>
);

export default Root;
