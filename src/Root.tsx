import { Navigate, Route, Routes } from 'react-router-dom';
import { App } from './App';
import HomePage from './pages/HomePage';
import TabsPage from './pages/TabsPage';
import NotFoundPage from './pages/NotFoundPage';

const Root = () => (
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="home" element={<Navigate to="/" />} />

      <Route path="tabs" element={<TabsPage />}>
        <Route index element={<TabsPage />} />
        <Route path=":tabId" element={<TabsPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>
);

export default Root;
