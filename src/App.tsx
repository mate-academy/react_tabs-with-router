import React from 'react';
import {
  Routes,
  Route,
  Link,
  Navigate,
  useParams,
  useLocation,
} from 'react-router-dom';
import classNames from 'classnames';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const Home: React.FC = () => (
  <div>
    <h1 className="title" data-cy="HomeTitle">
      Home page
    </h1>
  </div>
);

const TabsPage: React.FC = () => {
  const { tabId } = useParams<{ tabId?: string }>();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <div>
      <h1 className="title" data-cy="TabsPageTitle">
        Tabs page
      </h1>

      <div className="tabs is-boxed" data-cy="TabsContainer">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={classNames({ 'is-active': tab.id === tabId })}
              data-cy={`Tab`}
            >
              <Link to={`/tabs/${tab.id}`} data-cy="TabLink">
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab ? selectedTab.content : 'Please select a tab'}
      </div>
    </div>
  );
};

const NotFound: React.FC = () => (
  <div>
    <h1 className="title" data-cy="NotFoundTitle">
      Page not found
    </h1>
  </div>
);

export const App: React.FC = () => {
  const location = useLocation(); // Get the current path

  return (
    <>
      <nav
        className={classNames(
          'navbar',
          'is-light',
          'is-fixed-top',
          'is-mobile',
          'has-shadow',
        )}
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link
              to="/"
              className={classNames('navbar-item', {
                'is-active': location.pathname === '/',
              })}
              data-cy="NavHome"
            >
              Home
            </Link>
            <Link
              to="/tabs"
              className={classNames('navbar-item', {
                'is-active': location.pathname.startsWith('/tabs'),
              })}
              data-cy="NavTabs"
            >
              Tabs
            </Link>
          </div>
        </div>
      </nav>

      <div className="section" data-cy="Section">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tabs" element={<TabsPage />} />
            <Route path="/tabs/:tabId" element={<TabsPage />} />
            <Route path="/home" element={<Navigate to="/" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
