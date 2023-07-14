import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { TabsPage } from './Pages/TabsPage';
import { NotfoundPage } from './Pages/NotfoundPage';
import { Layout } from './Layout/Layout';

export const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="home" element={<Navigate to="/" replace />} />
      <Route path="tabs" element={<TabsPage />}>
        <Route path=":tabId" element={<TabsPage />} />
      </Route>
      <Route path="*" element={<NotfoundPage />} />
    </Route>
  </Routes>
);
