import {
  Routes,
  Route,
  NavLink,
  Navigate,
  useLocation,
} from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';
import { NotFound } from './components/NotFound';

export const App = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink
              to="/"
              className={
                currentPath === '/' ? 'navbar-item is-active' : 'navbar-item'
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/tabs"
              className={
                currentPath.startsWith('/tabs')
                  ? 'navbar-item is-active'
                  : 'navbar-item'
              }
            >
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="tabs" element={<TabsPage />}>
            <Route path=":tabId" element={<TabsPage />} />
          </Route>
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};
