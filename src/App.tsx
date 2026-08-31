/* eslint-disable prettier/prettier */
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import {
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom';

import { Tab } from './types/Tab';

const tabs: Tab[] = [
  {
    id: 'tab-1',
    title: 'Tab 1',
    content: 'Some text 1',
  },
  {
    id: 'tab-2',
    title: 'Tab 2',
    content: 'Some text 2',
  },
  {
    id: 'tab-3',
    title: 'Tab 3',
    content: 'Some text 3',
  },
];

const Navigation = () => {
  const location = useLocation();

  const isTabsPage = location.pathname.startsWith('/tabs');
  const isHomePage = location.pathname === '/';

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link
            to="/"
            className={`navbar-item ${
              isHomePage ? 'is-active' : ''
            }`}
          >
            Home
          </Link>

          <Link
            to="/tabs"
            className={`navbar-item ${
              isTabsPage ? 'is-active' : ''
            }`}
          >
            Tabs
          </Link>
        </div>
      </div>
    </nav>
  );
};

const HomePage = () => {
  return <h1 className="title">Home page</h1>;
};

const TabsPage = () => {
  const { tabId } = useParams();

  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={
                selectedTab?.id === tab.id ? 'is-active' : ''
              }
            >
              <Link to={`/tabs/${tab.id}`}>
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab ? (
          selectedTab.content
        ) : (
          'Please select a tab'
        )}
      </div>
    </>
  );
};

const PageNotFound = () => {
  return <h1 className="title">Page not found</h1>;
};

export const App = () => {
  return (
    <>
      <Navigation />

      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="tabs">
              <Route index element={<TabsPage />} />
              <Route
                path=":tabId"
                element={<TabsPage />}
              />
            </Route>

            <Route
              path="/home"
              element={<Navigate to="/" replace />}
            />

            <Route
              path="*"
              element={<PageNotFound />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
};
