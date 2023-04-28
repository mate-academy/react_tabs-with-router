import { Navigate, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import HomePage from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import * as constants from './constans/tabs';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

export const App = () => (
  <>
    <NavBar />

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="tabs" element={<TabsPage tabs={constants.TABS} />}>
            <Route path=":tabId" element={<TabsPage tabs={constants.TABS} />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  </>
);
