import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { UnfoundPage } from './pages/NotFoundPage';
import { TabsPage } from './pages/TabsPage';
import { MainNav } from './components/MainNav';

export const App = () => (
  <>
    <MainNav />

    <div className="section">
      <div className="container">

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="home" element={<Navigate to="/" replace />} />

          <Route path="tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>

          <Route path="*" element={<UnfoundPage />} />
        </Routes>

      </div>
    </div>
  </>
);
