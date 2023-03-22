import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

import { TabsPage } from './components/TabsPage';
import { Navbar } from './components/Navbar';

export const App = () => (
  <>
    <Navbar />

    <div className="section">
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={<h1 className="title">Home page</h1>}
          />
          <Route
            path="/home"
            element={<Navigate to="/" replace />}
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

          <Route
            path="*"
            element={<h1 className="title">Page not found</h1>}
          />
        </Routes>
      </div>
    </div>
  </>
);
