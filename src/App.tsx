import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';
import { TabContent } from './components/TabContent';
import { Tabs } from './components/Tabs';
import { HomePage } from './components/HomePage';
import { NotFound } from './components/NotFound';
import { SearchLink } from './components/SearchLink';
import { tabs } from './constats';

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
            <SearchLink to="/" text="Home" />
            <SearchLink to="/tabs" text="Tabs" />
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
              element={<NotFound />}
            />
          </Routes>

        </div>
      </div>
    </>
  );
};
