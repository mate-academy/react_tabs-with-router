import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { Route, Routes, Navigate } from 'react-router-dom';
import { MainNav } from './components/MainNav';
import { TabsPage } from './pages/TabsPage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  return (
    <>
      <MainNav />

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
              <Route
                index
                element={<TabsPage />}
              />
              <Route
                path=":tabId"
                element={<TabsPage />}
              />
            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
};
