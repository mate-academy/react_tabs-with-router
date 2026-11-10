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
import type { Tab } from './types/Tab';
import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const Nav = () => {
  const location = useLocation();
  const homeActive = location.pathname === '/';
  const tabsActive =
    location.pathname === '/tabs' || location.pathname.startsWith('/tabs/');

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link
            to="/"
            className={`navbar-item${homeActive ? ' is-active' : ''}`}
          >
            Home
          </Link>
          <Link
            to="/tabs"
            className={`navbar-item${tabsActive ? ' is-active' : ''}`}
          >
            Tabs
          </Link>
        </div>
      </div>
    </nav>
  );
};

const HomePage = () => (
  <div className="section">
    <div className="container">
      <h1 className="title">Home page</h1>
    </div>
  </div>
);

const TabsList = ({ selectedTabId }: { selectedTabId?: string }) => (
  <div className="tabs is-boxed">
    <ul>
      {tabs.map(tab => (
        <li
          key={tab.id}
          className={tab.id === selectedTabId ? 'is-active' : ''}
          data-cy="Tab"
        >
          <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
        </li>
      ))}
    </ul>
  </div>
);

const TabsPage = () => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <TabsList selectedTabId={selectedTab?.id} />
        <div className="block" data-cy="TabContent">
          {selectedTab ? selectedTab.content : 'Please select a tab'}
        </div>
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

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <Nav />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="home" element={<Navigate to="/" replace />} />
      <Route path="tabs">
        <Route index element={<TabsPage />} />
        <Route path=":tabId" element={<TabsPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </>
);
