import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Tabs } from './pages/Tabs';
import { NotFoundPage } from './pages/NotFoundPage';
import { Layout } from './layouts';

export const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />

      <Route path="home" element={<Navigate to="/" replace />} />

      <Route path="tabs">
        <Route index element={<Tabs />} />
        <Route path=":tabId" element={<Tabs />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>
);
