import {
  Routes, Route, Navigate,
} from 'react-router-dom';
import { Navbar } from './components/Navbar';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import TabsPage from './Pages/TabsPage';

export const App = () => {
  return (
    <div className="has-navbar-fixed-top">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={(
            <div className="section">
              <div className="container">
                <h1 className="title">Home page</h1>
              </div>
            </div>
          )}
        />
        <Route
          path="/home"
          element={<Navigate to="/" replace />}
        />
        <Route
          path="tabs/*"
          element={(
            <div className="section">
              <div className="container">
                <Routes>
                  <Route index element={<TabsPage />} />
                  <Route path=":tabId" element={<TabsPage />} />
                </Routes>
              </div>
            </div>
          )}
        />
        <Route
          path="*"
          element={<h1 className="title">Page not found</h1>}
        />
      </Routes>
    </div>
  );
};
