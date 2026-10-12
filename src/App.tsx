import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import {
  Routes,
  Route,
  Link,
  Navigate,
  useParams,
  useLocation,
} from 'react-router-dom';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { Tab as TabType } from './types/Tab';

const tabs: TabType[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const TabsPage = () => {
  const { tabId } = useParams();
  const tabIndex = tabs.findIndex(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <Tabs selectedIndex={tabIndex} onSelect={() => {}}>
        <TabList className="tabs is-boxed custom-tab-list">
          {tabs.map(tab => (
            <Tab
              key={tab.id}
              data-cy="Tab"
              className={tab.id === tabId ? 'is-active' : ''}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </Tab>
          ))}
        </TabList>

        {tabIndex === -1 && (
          <div className="block" data-cy="TabContent">
            Please select a tab
          </div>
        )}

        {tabs.map(tab => (
          <TabPanel key={tab.id}>
            <div className="block" data-cy="TabContent">
              {tab.content}
            </div>
          </TabPanel>
        ))}
      </Tabs>
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
              to="/"
              className={`navbar-item ${location.pathname === '/' ? 'is-active' : ''}`}
            >
              Home
            </Link>
            <Link
              to="/tabs"
              className={`navbar-item ${location.pathname.startsWith('/tabs') ? 'is-active' : ''}`}
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

            <Route path="/home" element={<Navigate to="/" replace />} />

            <Route path="/tabs">
              <Route index element={<TabsPage />} />
              <Route path=":tabId" element={<TabsPage />} />
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
