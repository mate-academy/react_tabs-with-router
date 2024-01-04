import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';
import { TabsPage } from './TabsPage';
import { HomePage } from './HomePage';

export const App = () => {
  const location = useLocation();

  console.log("Current pathname:", location.pathname);

  const isActive = (path: string) => {
    // Check for root path explicitly
    if (path === '/') {
      return location.pathname === '/';
    }
    // Check for other paths
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  return (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow has-navbar-fixed-top"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className={`navbar-item ${isActive('/') ? 'is-active' : ''}`}>Home</Link>
          <Link to="/tabs" className={`navbar-item ${isActive('/tabs') ? 'is-active' : ''}`}>Tabs</Link>
        </div>
      </div>
    </nav>

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="*" element={< NotFound/>} />
        </Routes>
      </div>
    </div>
  </>
  )
};

const NotFound = () => (
  <p className="title">Page not found</p>
);
