import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import {
  Link,
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import TabsPage from './pages/TabsPage';
import NotFoundPage from './pages/NotFoundPage';
import TabContent from './components/TabContent';

function Navbar() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const isTabs = pathname.startsWith('/tabs');

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className={`navbar-item ${isHome ? 'is-active' : ''}`}>
            Home
          </Link>

          <Link
            to="/tabs"
            className={`navbar-item ${isTabs ? 'is-active' : ''}`}
          >
            Tabs
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '4rem' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/home" element={<Navigate to="/" replace />} />

          <Route path="/tabs" element={<TabsPage />}>
            <Route index element={<TabContent />} />
            <Route path=":tabId" element={<TabContent />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        <Outlet />
      </div>
    </>
  );
}
