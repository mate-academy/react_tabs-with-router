import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { MainPage } from './pages/MainPage';
import { Route, Routes, Navigate } from 'react-router-dom';
import { PageNotFound } from './pages/PageNotFound';
import { HomePage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';

export const App = () => (
  <Routes>
    <Route path="/" element={<MainPage />}>
      <Route index element={<HomePage />} />
      <Route path="home" element={<Navigate to={`/`} />} />
      <Route path="tabs">
        <Route index element={<TabsPage />} />
        <Route path=":tabId" element={<TabsPage />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Route>
  </Routes>
);
