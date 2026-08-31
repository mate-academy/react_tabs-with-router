/* eslint-disable import/no-extraneous-dependencies */
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
  useNavigate,
  useParams,
} from 'react-router-dom';

import {
  Tabs,
  TabList,
  Tab,
  TabPanel,
} from 'react-tabs';

import 'react-tabs/style/react-tabs.css';

import { Tab as TabType } from './types/Tab';

const tabs: TabType[] = [
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

  const isHomePage = location.pathname === '/';
  const isTabsPage = location.pathname.startsWith('/tabs');

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
  const navigate = useNavigate();

  const selectedTab = tabs.find(tab => tab.id === tabId);

  const selectedIndex = tabs.findIndex(
    tab => tab.id === tabId,
  );

  const handleTabSelect = (index: number) => {
    navigate(`/tabs/${tabs[index].id}`);
  };

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <Tabs
        selectedIndex={
          selectedIndex >= 0 ? selectedIndex : -1
        }
        onSelect={handleTabSelect}
      >
        <TabList>
          {tabs.map(tab => (
            <Tab
              key={tab.id}
              data-cy="Tab"
              className={
                selectedTab?.id === tab.id
                  ? 'is-active'
                  : ''
              }
            >
              <Link
                to={`/tabs/${tab.id}`}
                onClick={event => {
                  event.stopPropagation();
                }}
              >
                {tab.title}
              </Link>
            </Tab>
          ))}
        </TabList>

        {tabs.map(tab => (
          <TabPanel key={tab.id}>
            {selectedTab?.id === tab.id && (
              <div
                className="block"
                data-cy="TabContent"
              >
                {tab.content}
              </div>
            )}
          </TabPanel>
        ))}
      </Tabs>

      {!selectedTab && (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
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
