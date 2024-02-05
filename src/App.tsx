import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  Navigate, NavLink, Route, Routes,
} from 'react-router-dom';
import { Tabs } from './components/Tabs';

export const App = () => {
  const getNavLinkClass = ({ isActive }:{ isActive:boolean }) => {
    return isActive ? 'navbar-item is-active' : 'navbar-item';
  };

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
              className={getNavLinkClass}
            >
              Home
            </NavLink>
            <NavLink
              to="/tabs"
              className={getNavLinkClass}
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
              element={<h1 className="title">Home page</h1>}
            />
            <Route
              path="tabs"
            >
              <Route
                index
                element={(
                  <>
                    <h1 className="title">Tabs page</h1>
                    <Tabs />
                  </>
                )}
              />
              <Route
                path=":tabId"
                element={(
                  <>
                    <h1 className="title">Tabs page</h1>
                    <Tabs />
                  </>
                )}
              />
            </Route>
            <Route
              path="/home"
              element={(
                <Navigate
                  to="/"
                  replace
                />
              )}
            />
            <Route
              path="*"
              element={<h1 className="title">Page not found</h1>}
            />
          </Routes>
        </div>
      </div>
    </>
  );
};
