import 'bulma/css/bulma.css';
import cn from 'classnames';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  NavLink,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { Tabs } from './components/Tabs';

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
              className={({ isActive }) => cn('navbar-item', {
                'is-active': isActive,
              })}
            >
              Home
            </NavLink>
            <NavLink
              to="/tabs"
              className={({ isActive }) => cn('navbar-item', {
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
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/" element={<h1 className="title">Home page</h1>} />
          <Route path="tabs">
            <Route path=":tabId?" element={<Tabs />} />
          </Route>

          <Route path="*" element={<h1 className="title">Page not found</h1>} />
        </Routes>
      </div>
    </>
  );
};
