import {
  Navigate,
  NavLink,
  Route,
  Routes,
} from 'react-router-dom';

import cn from 'classnames';
import { TabsPage } from './TabsPage';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

enum Nav {
  Home = 'Home',
  Tabs = 'Tabs',
}

export const App = () => {
  const renderNavLink = (text: Nav) => {
    const path = {
      Tabs: '/tabs',
      Home: '/',
    }[text];

    return (
      <NavLink
        to={path}
        className={({ isActive }) => (
          cn('navbar-item', {
            'is-active': isActive,
          })
        )}
      >
        {text}
      </NavLink>
    );
  };

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            {renderNavLink(Nav.Home)}
            {renderNavLink(Nav.Tabs)}
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Routes>
            <Route
              path="/home"
              element={
                <Navigate to="/" />
              }
            />

            <Route
              path="/"
              element={
                <h1 className="title">Home page</h1>
              }
            />

            <Route path="/tabs">
              <Route
                index
                element={<TabsPage />}
              />

              <Route
                path="/tabs/:tabId"
                element={<TabsPage />}
              />
            </Route>

            <Route
              path="*"
              element={
                <h1 className="title">Page not found</h1>
              }
            />
          </Routes>
        </div>
      </div>
    </>
  );
};
