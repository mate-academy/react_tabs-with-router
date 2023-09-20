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
import { TabsList } from './сomponents/TabsList';

const getNavStyles = (
  { isActive }: { isActive: boolean },
) => classNames('navbar-item', {
  'is-active': isActive,
});

export const App = () => {
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
              className={getNavStyles}
            >
              Home
            </NavLink>
            <NavLink
              to="tabs"
              className={getNavStyles}
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
            <Route path="tabs">
              <Route
                index
                element={(
                  <>
                    <h1 className="title">Tabs page</h1>
                    <TabsList />
                  </>
                )}
              />
              <Route
                path=":tabId"
                element={<TabsList />}
              />
            </Route>
            <Route
              path="/home"
              element={<Navigate to="/" />}
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
