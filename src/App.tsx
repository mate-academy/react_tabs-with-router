import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import classNames from 'classnames';
import {
  HashRouter,
  Link,
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom';
import { Tabs } from './components/Tabs';
import type { Tab } from './types/Tab';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const HomePage = () => <h1 className="title">Home page</h1>;

const TabsPage = () => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId) || null;

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <Tabs tabs={tabs} selectedTabId={selectedTab?.id} />

      <div className="block" data-cy="TabContent">
        {selectedTab ? selectedTab.content : 'Please select a tab'}
      </div>
    </>
  );
};

const NotFoundPage = () => <h1 className="title">Page not found</h1>;

const AppLayout = () => {
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';
  const isTabsPage = pathname.startsWith('/tabs');

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
              className={classNames('navbar-item', {
                'is-active': isHomePage,
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

      <div className="section">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export const App = () => (
  <HashRouter>
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </HashRouter>
);
