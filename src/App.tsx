import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import classNames from 'classnames';
import {
  NavLink,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { TabsPage } from './Components/TabsPage';

export const App = () => {
  const getNavClass = ({ isActive }: { isActive: boolean }) => {
    return classNames('navbar-item', { 'is-active': isActive });
  };

  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" className={getNavClass}>
              Home

            </NavLink>
            <NavLink to="/tabs" className={getNavClass}>Tabs</NavLink>

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

            <Route
              path="/*"
              element={<h1 className="title">Page not found</h1>}
            />
          </Routes>
        </div>

      </div>
    </>
  );
};
