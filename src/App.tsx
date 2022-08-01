import classNames from 'classnames';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

import {
  Navigate,
  NavLink,
  Route,
  Routes,
} from 'react-router-dom';

import { TabsPage } from './components/TabsPage';

const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <nav className="navbar is-fixed-top has-background-light" data-cy="nav">
      <div className="navbar-menu">
        <div className="navbar-start">
          <NavLink
            to="/"
            className={({ isActive }) => classNames('navbar-item', {
              'is-active': isActive,
            })}
          >
            Home
          </NavLink>

          <NavLink
            to="tabs"
            className={({ isActive }) => classNames('navbar-item', {
              'is-active': isActive,
            })}
          >
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>

    <div className="section">
      <Routes>
        <Route path="/" element={<h1 className="title">Home page</h1>} />
        <Route path="/home" element={<Navigate to="/" />} />

        <Route path="tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>

        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Routes>
    </div>
  </>
);

export default App;
