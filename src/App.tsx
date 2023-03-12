import {
  Navigate, NavLink, Route, Routes, useMatch,
} from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import cn from 'classnames';
import { TabsPage } from './TabsPage';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const match = useMatch('/tabs/:tabId');
  const activeTabId = match?.params.tabId;

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
              className={({ isActive }) => (
                cn(
                  'navbar-item',
                  {
                    'is-active': isActive,
                  },
                )
              )}
            >
              Home
            </NavLink>
            <NavLink
              to="/tabs"
              className={({ isActive }) => (
                cn(
                  'navbar-item',
                  {
                    'is-active': isActive,
                  },
                )
              )}
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
              path="/home"
              element={
                <Navigate to="/" replace />
              }
            />
            <Route path="tabs">
              <Route
                index
                element={(
                  <>
                    <h1 className="title">Tabs page</h1>
                    <TabsPage
                      tabs={tabs}
                      activeTabId={activeTabId}
                    />
                  </>
                )}
              />
              <Route
                path=":tabId"
                element={(
                  <>
                    <h1 className="title">Tabs page</h1>
                    <TabsPage
                      tabs={tabs}
                      activeTabId={activeTabId}
                    />
                  </>
                )}
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
