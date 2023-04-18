import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { PageNotFound } from './components/PageNotFound';
import { TabsPage } from './components/TabsPage';
import { HomePage } from './components/HomePage';

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <NavBar />

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

          <Route path="tabs">
            <Route
              index
              element={<TabsPage />}
            />
            <Route
              path=":selectedTabId"
              element={<TabsPage />}
            />
          </Route>

          <Route
            path="*"
            element={<PageNotFound />}
          />
        </Routes>
      </div>
    </div>
  </>
);
