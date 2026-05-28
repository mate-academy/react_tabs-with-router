import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import classNames from 'classnames';
import {
  Tab as ReactTab,
  TabList,
  TabPanel,
  Tabs as ReactTabs,
} from 'react-tabs';
import {
  HashRouter,
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { Tab as TabData } from './types/Tab';

const tabList: TabData[] = [
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

function HomePage() {
  return <h1 className="title">Home page</h1>;
}

function NotFoundPage() {
  return <h1 className="title">Page not found</h1>;
}

function Tabs() {
  const navigate = useNavigate();
  const { tabId } = useParams();
  const activeTab = tabList.find(tab => tab.id === tabId);
  const activeTabIndex = tabList.findIndex(tab => tab.id === tabId);

  return (
    <>
      <ReactTabs
        className="tabs is-boxed"
        selectedIndex={activeTabIndex}
        selectedTabClassName="is-active"
        onSelect={index => {
          navigate(`/tabs/${tabList[index].id}`);
        }}
      >
        <TabList>
          {tabList.map(tab => (
            <ReactTab key={tab.id} data-cy="Tab">
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </ReactTab>
          ))}
        </TabList>

        {tabList.map(tab => (
          <TabPanel key={tab.id}>
            <div className="block" data-cy="TabContent">
              {tab.content}
            </div>
          </TabPanel>
        ))}
      </ReactTabs>

      {!activeTab && (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </>
  );
}

function TabsPage() {
  return (
    <>
      <h1 className="title">Tabs page</h1>
      <Tabs />
    </>
  );
}

function Navigation() {
  const { pathname } = useLocation();
  const isTabsPage = pathname.startsWith('/tabs');

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
              'is-active': pathname === '/',
            })}
          >
            Home
          </Link>

          <Link
            to="/tabs"
            className={classNames('navbar-item', {
              'is-active': isTabsPage,
            })}
          >
            Tabs
          </Link>
        </div>
      </div>
    </nav>
  );
}

function AppRoutes() {
  return (
    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export function App() {
  return (
    <HashRouter>
      <Navigation />
      <AppRoutes />
    </HashRouter>
  );
}
