import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import {
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom';
import classNames from 'classnames';
import './App.scss';
import { Tab } from './types/Tab';
import { Tabs, TabList, Tab as ReactTab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

type TabParams = {
  tabId?: string;
};

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const HomePage = () => (
  <div className="section">
    <div className="container">
      <h1 className="title">Home page</h1>
    </div>
  </div>
);

const TabsPage = () => {
  const { tabId } = useParams<TabParams>();
  const selectedIndex = tabs.findIndex(tab => tab.id === tabId);

  const tabsProps = {
    selectedIndex: selectedIndex >= 0 ? selectedIndex : -1,
  };

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <div className="tabs is-boxed">
          <Tabs {...tabsProps}>
            <TabList>
              {tabs.map(tab => (
                <ReactTab
                  key={tab.id}
                  data-cy="Tab"
                  selectedClassName="is-active"
                >
                  <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
                </ReactTab>
              ))}
            </TabList>

            {tabs.map((tab, idx) => (
              <TabPanel key={tab.id}>
                <div
                  className="block"
                  {...(selectedIndex === idx
                    ? { 'data-cy': 'TabContent' }
                    : {})}
                >
                  {tab.content}
                </div>
              </TabPanel>
            ))}
          </Tabs>
        </div>

        {selectedIndex < 0 && (
          <div className="block" data-cy="TabContent">
            Please select a tab
          </div>
        )}
      </div>
    </div>
  );
};

const NotFoundPage = () => (
  <div className="section">
    <div className="container">
      <h1 className="title">Page not found</h1>
    </div>
  </div>
);

const AppNav = () => {
  const { pathname } = useLocation();
  const isHomeActive = pathname === '/';
  const isTabsActive = pathname === '/tabs' || pathname.startsWith('/tabs/');

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link
            to="/"
            className={classNames('navbar-item', {
              'is-active': isHomeActive,
            })}
          >
            Home
          </Link>
          <Link
            to="/tabs"
            className={classNames('navbar-item', {
              'is-active': isTabsActive,
            })}
          >
            Tabs
          </Link>
        </div>
      </div>
    </nav>
  );
};

export const App = () => (
  <>
    <AppNav />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<Navigate replace to="/" />} />
      <Route path="/tabs">
        <Route index element={<TabsPage />} />
        <Route path=":tabId" element={<TabsPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </>
);
