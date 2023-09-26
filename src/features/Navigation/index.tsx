import {
  NavLink,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import classNames from 'classnames';
import { HomePage } from '../HomePage';
import { NotFoundPage } from '../NotFoundPage';
import { TabsPage } from '../TabsPage';

export const Navigation = () => {
  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink
              to="/"
              className={({ isActive }) => classNames('navbar-item',
                { 'is-active': isActive })}
            >
              Home
            </NavLink>
            <NavLink
              to="/tabs"
              className={({ isActive }) => classNames('navbar-item',
                { 'is-active': isActive })}
            >
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="tabs" element={<TabsPage />} />
        <Route path="/tabs/:userID" element={<TabsPage />} />
        <Route
          path="home"
          element={<Navigate to="/" />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </>
  );
};
