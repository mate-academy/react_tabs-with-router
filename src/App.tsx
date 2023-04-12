import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { NotPage } from './components/Pages/NotPage';
import { HomePage } from './components/Pages/HomePage';
import { TabsPage } from './components/Pages/TabsPage';

export const App = () => {
  return (
    <>
      <Navbar />

      <div className="section">
        <div className="container">
          <Routes>
            <Route
              path="*"
              element={<NotPage />}
            />

            <Route
              path="/"
              element={<HomePage />}
            />

            <Route
              path="/home"
              element={<Navigate to="/" replace />}
            />

            <Route path="/tabs">
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
