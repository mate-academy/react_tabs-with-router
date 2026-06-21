import React from 'react';
import {
  Routes,
  Route,
  Navigate,
  NavLink,
  useParams,
  Link,
} from 'react-router-dom';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

export interface Tab {
  id: string;
  title: string;
  content: string;
}

const tabsData: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

interface TabsProps {
  tabs: Tab[];
  activeTabId?: string;
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTabId }) => (
  <div className="tabs is-boxed">
    <ul>
      {tabs.map(tab => {
        const isActive = tab.id === activeTabId;

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
);

interface TabsPageProps {
  tabs: Tab[];
}

const TabsPage: React.FC<TabsPageProps> = ({ tabs }) => {
  const { tabId } = useParams<{ tabId: string }>();
  const activeTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <Tabs tabs={tabs} activeTabId={tabId} />

      <div className="block" data-cy="TabContent">
        {activeTab ? activeTab.content : 'Please select a tab'}
      </div>
    </>
  );
};

const HomePage = () => <h1 className="title">Home page</h1>;
const PageNotFound = () => <h1 className="title">Page not found</h1>;

export const App = () => {
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `navbar-item ${isActive ? 'is-active' : ''}`;

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" className={getNavLinkClass} end>
              Home
            </NavLink>
            <NavLink to="/tabs" className={getNavLinkClass}>
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="home" element={<Navigate to="/" replace />} />

            <Route path="tabs">
              <Route index element={<TabsPage tabs={tabsData} />} />
              <Route path=":tabId" element={<TabsPage tabs={tabsData} />} />
            </Route>

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
