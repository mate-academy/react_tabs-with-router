import {
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { HomePage } from './pages/HomePage';
import { ErrorPage } from './pages/ErrorPage';
import { TabsPage } from './pages/TabsPage';

import { MainNav } from './components/MainNav';

export const App: React.FC = () => (
  <>
    <MainNav />

    <div className="section">
      <Routes>
        <Route path="*" element={<ErrorPage />} />

        <Route path="/" element={<HomePage />} />
        <Route path="home" element={<Navigate to="/" replace />} />

        <Route path="tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>
      </Routes>
    </div>
  </>
);
