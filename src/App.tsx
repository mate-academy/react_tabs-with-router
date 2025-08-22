import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import TabsPage from './components/TabsPage';
import NotFound from './components/NotFound';
import Home from './components/Home';

export const App = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="home" element={<Navigate to={'/'} replace />} />

      <Route path="tabs">
        <Route index element={<TabsPage />} />
        <Route path=":tabId" element={<TabsPage />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);
