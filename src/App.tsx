import 'bulma/css/bulma.css';
import { Navigate, Routes, Route, NavLink } from 'react-router-dom';
import cn from 'classnames';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { HomePage } from './pages/Home';
import { TabsPage } from './pages/Tabs';

const getActivePage = ({ isActive }: { isActive: boolean }) => {
  return cn('navbar-item', {
    'is-active': isActive,
  });
};

export const App = () => (
  <>
    {/* <html class="has-navbar-fixed-top"> */}
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className={getActivePage}>
            Home
          </NavLink>
          <NavLink to="/tabs" className={getActivePage}>
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" />} />
          <Route path="tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>
          <Route path="*" element={<h1 className="title">Page not found</h1>} />
        </Routes>
      </div>
    </div>
  </>
);
