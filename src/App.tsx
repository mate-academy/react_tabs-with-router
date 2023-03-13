import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  Navigate,
  NavLink,
  Route,
  Routes,
} from 'react-router-dom';
import classNames from 'classnames';
import { Tabs } from './components/Tabs';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => (
  <>
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink
            className={({ isActive }) => (
              classNames(
                'navbar-item',
                { 'is-active': isActive },
              )
            )}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (
              classNames(
                'navbar-item',
                { 'is-active': isActive },
              )
            )}
            to="/tabs"
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
            element={
              <h1 className="title">Home page</h1>
            }
          />

          <Route
            path="home"
            element={
              <Navigate to="/" replace />
            }
          />

          <Route path="tabs">
            <Route
              index
              element={
                (
                  <Tabs
                    tabs={tabs}
                  />
                )
              }
            />

            <Route
              path=":tabId"
              element={
                (
                  <Tabs
                    tabs={tabs}
                  />
                )
              }
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
