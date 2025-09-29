import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  Routes,
  Route,
  Navigate,
  Link,
  useLocation,
  useParams,
} from 'react-router-dom';
import classNames from 'classnames';

interface Tab {
  id: string;
  title: string;
  content: string;
}

interface TabLinkItemProps {
  tab: Tab;
  selectedTabId: string | undefined;
}

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const HomePage = () => (
  <div className="section">
    <div className="container">
      <h1 className="title" data-cy="HomePageTitle">
        Home page
      </h1>
    </div>
  </div>
);

const TabLinkItem = ({ tab, selectedTabId }: TabLinkItemProps) => {
  return (
    <li
      key={tab.id}
      className={classNames({ 'is-active': selectedTabId === tab.id })}
      data-cy="Tab"
    >
      <Link to={`/tabs/${tab.id}`} data-cy="TabLink">
        {tab.title}
      </Link>
    </li>
  );
};

const TabsPage = () => {
  const { tabId } = useParams<{ tabId: string }>();
  const selectedTab = tabId ? tabs.find(tab => tab.id === tabId) : undefined;

  const contentToDisplay = selectedTab
    ? selectedTab.content
    : 'Please select a tab';

  return (
    <div className="section">
      <div className="container">
        <h1 className="title" data-cy="TabsPageTitle">
          Tabs page
        </h1>

        <div className="tabs is-boxed">
          <ul data-cy="TabList">
            {tabs.map(tab => (
              <TabLinkItem key={tab.id} tab={tab} selectedTabId={tabId} />
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {contentToDisplay}
        </div>
      </div>
    </div>
  );
};

const NotFoundPage = () => (
  <div className="section">
    <div className="container">
      <h1 className="title" data-cy="NotFoundPageTitle">
        Page not found
      </h1>
    </div>
  </div>
);

export const App = () => {
  const location = useLocation();
  const isHomeActive = location.pathname === '/';
  const isTabsActive = location.pathname.startsWith('/tabs');

  const getNavLinkClass = (isActive: boolean): string =>
    classNames('navbar-item', { 'is-active': isActive });

  return (
    <>
      <nav className="navbar is-light" data-cy="Nav">
        <div className="container">
          <div className="navbar-menu">
            <div className="navbar-start">
              <Link
                to="/"
                className={getNavLinkClass(isHomeActive)}
                data-cy="NavLink-Home"
              >
                Home
              </Link>
              <Link
                to="/tabs"
                className={getNavLinkClass(isTabsActive)}
                data-cy="NavLink-Tabs"
              >
                Tabs
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
