import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import cn from 'classnames';
import {
  NavLink,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';
import { TabContent } from './components/TabContent';
import { Tabs } from './components/Tabs';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

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
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={<h1 className="title">Home page</h1>}
            />

            <Route
              path="home"
              element={<Navigate to="/" replace />}
            />

            <Route
              path="tabs"
              element={(
                <>
                  <>
                    <h1 className="title">Tabs page</h1>
                    <Tabs tabs={tabs} />
                  </>

                  <Outlet />
                </>
              )}
            >
              <Route
                index
                element={(
                  <div className="block" data-cy="TabContent">
                    Please select a tab
                  </div>
                )}
              />

              <Route
                path=":tabId"
                element={<TabContent tabs={tabs} />}
              />
            </Route>

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
