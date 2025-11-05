import { Routes, Route, Navigate } from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { UsersPage } from './components/UserPage';
import { TabsPage } from './components/TabsPage';
import { PageNonFound } from './components/PageNotFound';
import { Layout } from './components/Layout';

export const App = () => (
  <>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<UsersPage />} />
        <Route path="tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>
        <Route path="*" element={<PageNonFound />} />
        <Route path="home" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  </>
);
