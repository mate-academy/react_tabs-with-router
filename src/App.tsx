
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import {
  NavLink,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const { pathname } = useLocation();

  const isTabsPage = pathname.startsWith('/tabs');

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
              end
              className={({ isActive }) =>
                isActive ? 'navbar-item is-active' : 'navbar-item'
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/tabs"
              className={() =>
                isTabsPage
                  ? 'navbar-item is-active'
                  : 'navbar-item'
              }
            >
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<h1 className="title">Home page</h1>} />

            <Route path="/home" element={<Navigate to="/" replace />} />

            <Route
              path="/tabs"
              element={
                <>
                  <h1 className="title">Tabs page</h1>

                  <div className="tabs is-boxed">
                    <ul>
                      {tabs.map(tab => (
                        <li
                          key={tab.id}
                          data-cy="Tab"
                          className={
                            pathname === `/tabs/${tab.id}`
                              ? 'is-active'
                              : ''
                          }
                        >
                          <NavLink to={`/tabs/${tab.id}`}>
                            {tab.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Routes>
                    <Route
                      index
                      element={
                        <div className="block" data-cy="TabContent">
                          Please select a tab
                        </div>
                      }
                    />

                    {tabs.map(tab => (
                      <Route
                        key={tab.id}
                        path={tab.id}
                        element={
                          <div className="block" data-cy="TabContent">
                            {tab.content}
                          </div>
                        }
                      />
                    ))}

                    <Route
                      path="*"
                      element={
                        <div className="block" data-cy="TabContent">
                          Please select a tab
                        </div>
                      }
                    />
                  </Routes>
                </>
              }
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
