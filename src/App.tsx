import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/Home.page';
import TabsPage from './pages/Tabs.page';
import ErrorPage from './pages/Error.page';

export const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="tabs">
        <Route index element={<TabsPage />} />
        <Route path=":tabId" element={<TabsPage />} />
      </Route>
      <Route path="home" element={<Navigate to="/" replace />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  </Routes>
);
