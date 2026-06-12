import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  Link,
  Outlet,
  Route,
  Routes,
  useLocation,
  Navigate,
} from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const Tabs = () => {
  const location = useLocation();

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isActive = location.pathname === `/tabs/${tab.id}`;

            return (
              <li
                key={tab.id}
                data-cy="Tab"
                className={isActive ? 'is-active' : ''}
              >
                <Link to={`/tabs/${tab.id}`} replace>
                  {tab.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        <Outlet />
      </div>
    </>
  );
};

export const App = () => {
  const location = useLocation();

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link
              to={'/'}
              className={
                location.pathname === '/'
                  ? 'navbar-item is-active'
                  : 'navbar-item'
              }
            >
              Home
            </Link>
            <Link
              to={'/tabs'}
              className={
                location.pathname.startsWith('/tabs')
                  ? 'navbar-item is-active'
                  : 'navbar-item'
              }
            >
              Tabs
            </Link>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<h1 className="title">Home page</h1>} />
            <Route path="/home" element={<Navigate to="/" />} />
            <Route path="/tabs" element={<Tabs />}>
              <Route index element={<>Please select a tab</>} />

              {tabs.map(tab => (
                <Route
                  key={tab.id}
                  path={tab.id}
                  element={<p>{tab.content}</p>}
                />
              ))}
              <Route path="*" element={<>Please select a tab</>} />
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
