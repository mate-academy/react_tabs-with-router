import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { NavLink, Outlet, Route, Routes, Navigate } from 'react-router-dom';
import { TabsPage } from './pages/TabsPage/TabsPage';

const activeTab = ({ isActive }: { isActive: boolean }) => {
  return ['navbar-item', isActive ? 'is-active' : ''].join(' ');
};

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className={isActive => activeTab(isActive)}>
            Home
          </NavLink>
          <NavLink to="/tabs" className={isActive => activeTab(isActive)}>
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<h1 className="title">Home page</h1>} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>

          <Route path="*" element={<h1 className="title">Page not found</h1>} />
        </Routes>
        <Outlet />
      </div>
    </div>
  </>
);
