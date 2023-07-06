import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  Link,
  Navigate,
  Outlet,
  Route,
  Routes,
  useParams,
} from 'react-router-dom';
import { TodoContent } from './components/TodoContent';
import { Tabs } from './components/Tabs';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const { tabId = '0' } = useParams();

  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">Home</Link>
            <Link to="/tabs" className="navbar-item">Tabs</Link>
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
                    <Tabs tabs={tabs} tabId={tabId} />
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
                element={<TodoContent tabs={tabs} tabId={tabId} />}
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
