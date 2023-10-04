import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import {
  Route,
  Routes,
  Navigate,
  Link,
  useLocation,
} from 'react-router-dom';
import { TabsPage } from './components/TabsPage';
import { NotFoundPage } from './components/NotFoundPage';
import { HomePage } from './components/HomePage';

export const App = () => {
  const location = useLocation();
  const isActive = location.pathname === '/';
  const isTabsActive = location.pathname.startsWith('/tabs');

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className={`navbar-item ${isActive ? 'is-active' : ''}`}>
              Home
            </Link>
            <Link to="/tabs" className={`navbar-item ${isTabsActive ? 'is-active' : ''}`}>
              Tabs
            </Link>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <>
            <Routes>
              <Route path="/" element={<HomePage />} index />
              <Route path="/home" element={<Navigate to="/" />} />
              <Route path="tabs">
                <Route index element={<TabsPage />} />
                <Route path=":tabId" element={<TabsPage />} />
              </Route>
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </>
        </div>
      </div>
    </>
  );
};
