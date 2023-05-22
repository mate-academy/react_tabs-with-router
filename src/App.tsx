import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { MainNavigation } from './components/MainNavigation';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { TabsPage } from './pages/TabsPage';

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <MainNavigation />

    <div className="section">
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />

          <Route
            path="/home"
            element={<Navigate to="/" replace />}
          />

          <Route
            path="*"
            element={<NotFoundPage />}
          />

          <Route path="tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>
        </Routes>
      </div>
    </div>
  </>
);
