import React from 'react';
import {
  Routes,
  Route,
  Navigate,
  Link,
  useLocation,
  useParams,
  useNavigate,
} from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tab } from './types/Tab';

// @ts-expect-error missing types for react_tabs-js
import { Tabs } from 'react_tabs-js';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const HomePage: React.FC = () => <h1 className="title">Home page</h1>;

const NotFoundPage: React.FC = () => <h1 className="title">Page not found</h1>;

const TabsPage: React.FC = () => {
  const { tabId } = useParams();
  const navigate = useNavigate();

  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <Tabs
        tabs={tabs}
        selectedTabId={tabId || ''}
        onTabSelected={(newTabId: string) => navigate(`/tabs/${newTabId}`)}
      />

      {/* Выводим контент выбранной вкладки, а если ее нет — дефолтный текст */}
      <div className="block" data-cy="TabContent">
        {selectedTab ? selectedTab.content : 'Please select a tab'}
      </div>
    </>
  );
};

export const App: React.FC = () => {
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
              className={`navbar-item ${
                location.pathname === '/' ? 'is-active' : ''
              }`}
            >
              Home
            </Link>

            <Link
              to="/tabs"
              className={`navbar-item ${
                location.pathname.startsWith('/tabs') ? 'is-active' : ''
              }`}
            >
              Tabs
            </Link>
          </div>
        </div>
      </nav>

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
    </>
  );
};