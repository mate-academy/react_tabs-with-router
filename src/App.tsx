import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

import { Navigate, Route, Routes } from 'react-router-dom';

import { Navbar } from './components/Navbar/Navbar';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { TabsPage } from './pages/TabsPage';

import './App.scss';

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <Navbar />

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="tabs">
            <Route index element={<TabsPage />} />

            <Route path=":tabId" element={<TabsPage />} />
          </Route>

          <Route path="/home" element={<Navigate to="/" replace />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  </>
);
