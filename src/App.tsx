import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import classNames from 'classnames';

import {
  Navigate,
  NavLink,
  Route,
  Routes,
} from 'react-router-dom';

import { TabsPage } from './components/TabsPage';

const App = () => (
  <>
    <nav
      className="navbar is-fixed-top has-background-light"
      data-cy="nav"
    >
      <div className="navbar-brand">
        <NavLink
          to="/"
          className={({ isActive }) => classNames(
            'navbar-item',
            { 'is-active': isActive },
          )}
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/tabs"
          className={({ isActive }) => classNames(
            'navbar-item',
            { 'is-active': isActive },
          )}
        >
          Tabs
        </NavLink>
      </div>
    </nav>

    <div className="section">
      <div className="container">
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
    </div>
  </>
);

export default App;
