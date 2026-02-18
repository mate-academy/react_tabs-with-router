import React from 'react';
import {
  Navigate,
  Route,
  Routes,
  Link,
  useLocation,
  useParams,
} from 'react-router-dom';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

export interface Tab {
  id: string;
  title: string;
  content: string;
}

const tabs: Tab[] = [
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

const Tabs: React.FC<{ tabs: Tab[] }> = ({ tabs: allTabs }) => {
  const { tabId } = useParams<{ tabId?: string }>();

  const activeTab = allTabs.find(tab => tab.id === tabId) || null;

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {allTabs.map(tab => {
            const isActive = tab.id === tabId;

            return (
              <li
                key={tab.id}
                data-cy="Tab"
                className={isActive ? 'is-active' : ''}
              >
                <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab ? activeTab.content : 'Please select a tab'}
      </div>
    </>
  );
};

const TabsPage: React.FC = () => (
  <div className="section">
    <div className="container">
      <h1 className="title">Tabs page</h1>
      <Tabs tabs={tabs} />
    </div>
  </div>
);

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
