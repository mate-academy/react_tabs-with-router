import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import cn from 'classnames';
import {
  Navigate,
  NavLink,
  Route,
  Routes,
} from 'react-router-dom';
import { Tabs } from './component/Tabs';
import { HomePage } from './component/Home';

const linkClass = ({ isActive }: { isActive: boolean }) => {
  return cn('navbar-item', {
    'is-active': isActive,
  });
};

export const App = () => {
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
              className={linkClass}
            >
              Home
            </NavLink>
            <NavLink
              to="/tabs"
              className={linkClass}
            >
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={<HomePage />}
            />
            <Route path="tabs">
              <Route
                path=":tabId?"
                element={<Tabs />}
              />
            </Route>
            <Route
              path="/home"
              element={<Navigate to="/" />}
            />
            <Route
              path="*"
              index
              element={<h1 className="title">Page not found</h1>}
            />
          </Routes>
        </div>
      </div>
    </>
  );
};
