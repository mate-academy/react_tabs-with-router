import React from 'react';
import {
  Navigate,
  Route,
  Routes,
  Link,
  useLocation,
  useParams,
} from 'react-router-dom';

import { Tabs as ReactTabs, TabList, Tab, TabPanel } from 'react-tabs';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

export interface TabItem {
  id: string;
  title: string;
  content: string;
}

const tabs: TabItem[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const NavBar: React.FC = () => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const isTabs = pathname === '/tabs' || pathname.startsWith('/tabs/');

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          {/* don't use NavLink; is-active is on parent element */}
          <Link className={`navbar-item ${isHome ? 'is-active' : ''}`} to="/">
            Home
          </Link>

          <Link
            className={`navbar-item ${isTabs ? 'is-active' : ''}`}
            to="/tabs"
          >
            Tabs
          </Link>
        </div>
      </div>
    </nav>
  );
};

const HomePage: React.FC = () => (
  <div className="section">
    <div className="container">
      <h1 className="title">Home page</h1>
    </div>
  </div>
);

/**
 * Presentational tabs using the REQUIRED library (`react-tabs`).
 * URL changes happen via <Link to="/tabs/:tabId"> (no onClick handlers).
 * Selected tab is controlled by selectedIndex (derived from URL in TabsPage).
 */
const LibraryTabs: React.FC<{
  tabs: TabItem[];
  selectedTabId?: string;
}> = ({ tabs: allTabs, selectedTabId }) => {
  const selectedIndex = allTabs.findIndex(t => t.id === selectedTabId);
  const hasValidTab = selectedIndex !== -1;

  // react-tabs needs a number; when invalid/missing we keep index 0,
  // but render NO panel content and show the required message instead.
  const safeIndex = hasValidTab ? selectedIndex : 0;

  return (
    <>
      <ReactTabs selectedIndex={safeIndex}>
        <div className="tabs is-boxed">
          <TabList>
            {allTabs.map(tab => (
              <Tab key={tab.id} data-cy="Tab" selectedClassName="is-active">
                {/* replace <a href="#..."> with Link and remove onClick */}
                <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
              </Tab>
            ))}
          </TabList>
        </div>

        {allTabs.map(tab => (
          <TabPanel key={tab.id}>
            {/* Show content only when URL tabId matches a real tab */}
            {hasValidTab && tab.id === selectedTabId ? (
              <div className="block" data-cy="TabContent">
                {tab.content}
              </div>
            ) : null}
          </TabPanel>
        ))}
      </ReactTabs>

      {/* If tabId is missing or invalid -> required message */}
      {!hasValidTab && (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </>
  );
};

const TabsPage: React.FC = () => {
  // requirement: read tabId at the page level
  const { tabId } = useParams<{ tabId?: string }>();

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>
        <LibraryTabs tabs={tabs} selectedTabId={tabId} />
      </div>
    </div>
  );
};

const NotFoundPage: React.FC = () => (
  <div className="section">
    <div className="container">
      <h1 className="title">Page not found</h1>
    </div>
  </div>
);

export const App: React.FC = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <NavBar />

    <Routes>
      <Route path="/" element={<HomePage />} />

      {/* Redirect /home -> / */}
      <Route path="/home" element={<Navigate to="/" replace />} />

      {/* Nested routes for /tabs and /tabs/:tabId */}
      <Route path="tabs">
        <Route index element={<TabsPage />} />
        <Route path=":tabId" element={<TabsPage />} />
      </Route>

      {/* All other URLs */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </>
);
