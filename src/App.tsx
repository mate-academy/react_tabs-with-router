import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import {
  Navigate,
  NavLink,
  Route,
  Routes,
} from 'react-router-dom';
import classNames from 'classnames';
import { TabPage } from './pages/TabPage';

const App = () => {
  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav className="navbar is-fixed-top has-background-light" data-cy="nav">
        <div className="navbar-menu">
          <div className="navbar-start">
            <NavLink
              to="/"
              className={({ isActive }) => classNames(
                'navbar-item',
                {
                  'is-active': isActive,
                },
              )}
            >
              Home
            </NavLink>

            <NavLink
              to="/tabs"
              className={({ isActive }) => classNames(
                'navbar-item',
                {
                  'is-active': isActive,
                },
              )}
            >
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <Routes>
          <Route path="*" element={<h1 className="title">Page not found</h1>} />
          <Route path="/" element={<h1 className="title">Home page</h1>} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="tabs">
            <Route index element={<TabPage />} />
            <Route path=":tabId" element={<TabPage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
