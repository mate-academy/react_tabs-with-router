import { Route, Routes, Navigate } from 'react-router-dom';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { HomePage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Navbar } from './components/Navbar';

export const App = () => (
  <>
    <Navbar />

    <div className="section">
      <div className="container">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  </>
);
