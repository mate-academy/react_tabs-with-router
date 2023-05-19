import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Routes, Link, Route } from 'react-router-dom';
import TabsPage from './components/TabsPage';

export const App = () => {
  return (
    <div className="has-navbar-fixed-top">
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item is-active">
              Home
            </Link>
            <Link to="/tabs" className="navbar-item">
              Tabs
            </Link>
          </div>
        </div>
      </nav>

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
