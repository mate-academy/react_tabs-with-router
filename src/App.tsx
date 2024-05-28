import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  Link,
  Navigate,
  NavLink,
  Outlet,
  Route,
  Routes,
  useParams,
} from 'react-router-dom';
import { useEffect, useState } from 'react';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type Tab = {
  id: string;
  title: string;
  content: string;
};

const HomePage = () => {
  return <h1 className="title">Home page</h1>;
};

const TabsPage = () => {
  const [currentTab, setCurrentTab] = useState<Tab | null>(null);
  const { tabId } = useParams();

  useEffect(() => {
    const foundTab = tabs.find(tab => tab.id === tabId);

    setCurrentTab(foundTab || null);
  }, [tabId]);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                key={tab.id}
                data-cy="Tab"
                className={tab.id === tabId ? 'is-active' : ''}
              >
                <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {currentTab ? currentTab.content : 'Please select a tab'}
      </div>
    </>
  );
};

const NotFoundPage = () => {
  return <h1 className="title">Page not found</h1>;
};

const NavigationLayout = () => {
  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink
              to="/"
              className={({ isActive }) =>
                'navbar-item' + (isActive ? ' is-active' : '')
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/tabs"
              className={({ isActive }) =>
                'navbar-item' + (isActive ? ' is-active' : '')
              }
            >
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}

    <Routes>
      <Route path="/" element={<NavigationLayout />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>
      </Route>
    </Routes>
  </>
);
