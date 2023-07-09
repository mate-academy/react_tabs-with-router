import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  Navigate,
  Route, Routes,
} from 'react-router-dom';
import { TabsPage } from './pages/TabsPage';
import { MainNav } from './Components/MainNav';
import { NotFoundPage } from './pages/NotFoundPage';
import { HomePage } from './pages/HomePage';
import { Layout } from './Components/Layout';

export const App = () => {
  return (
    <>
      <MainNav />

      <div className="section">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="home" element={<Navigate to="/" replace />} />
            <Route path="tabs" element={<TabsPage />}>
              <Route path=":tabId" element={<TabsPage />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

      </div>
    </>
  );
};
