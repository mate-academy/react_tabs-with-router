import '@fortawesome/fontawesome-free/css/all.css';
import 'bulma/css/bulma.css';
import {
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import TabsPage from './pages/TabsPage';

export const App: React.FC = () => (
  <>
    <Routes>
      <Route path="/" element={<Layout><HomePage /></Layout>} />
      <Route path="home" element={<Navigate to="/" />} />
      <Route path="/tabs" element={<Layout><Outlet /></Layout>}>
        <Route index element={<TabsPage />} />
        <Route path=":tabId" element={<TabsPage />} />
      </Route>
      <Route path="*" element={<Layout><NotFoundPage /></Layout>} />
    </Routes>
  </>
);
