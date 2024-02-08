import {
  Route,
  Routes,
  Link,
  Navigate,
  useLocation,
} from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './Tabs';

export const App = () => {
  const location = useLocation();

  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link
              to="/"
              className={`navbar-item ${location.pathname === '/' ? 'is-active' : ''}`}
            >
              Home
            </Link>
            <Link
              to="/tabs"
              className={`navbar-item ${location.pathname.startsWith('/tabs') ? 'is-active' : ''}`}
            >
              Tabs
            </Link>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <h1 className="title">Home page</h1>
              }
            />
            <Route
              path="*"
              element={
                <h1 className="title">Page not found</h1>
              }
            />
            <Route path="/home" element={<Navigate to="/" />} />
            <Route index path="/tabs" element={<Tabs />} />
            <Route path="/tabs/:tabId?" element={<Tabs />} />
          </Routes>
          <div
            className="block"
            data-cy="TabContent"
          >
            <Routes>
              <Route path="/tabs/tab-1" element="Some text 1" />
              <Route path="/tabs/tab-2" element="Some text 2" />
              <Route path="/tabs/tab-3" element="Some text 3" />
              <Route path="tabs/*" element="Please select a tab" />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};
