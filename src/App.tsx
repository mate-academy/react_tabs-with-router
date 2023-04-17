import { FC, useEffect, useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  Link,
  NavLink,
  Navigate,
  Route,
  Routes,
  useParams,
} from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

interface Tab {
  id: string;
  title: string;
  content: string;
}

interface Props {
  tabsArray: Tab[];
  tabId: string;
}

const getTabById = (tabsArr: Tab[], idFindBy: string) => {
  return tabsArr.find(tab => tab.id === idFindBy) || null;
};

const Tabs: FC<Props> = ({ tabsArray, tabId }) => {
  const [selectedTab, setSelectedTab] = useState<Tab | null>(null);

  useEffect(() => {
    setSelectedTab(getTabById(tabsArray, tabId));
  }, [tabId]);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabsArray.map(tab => {
            return (
              <li
                data-cy="Tab"
                className={`${tab.id === tabId ? 'is-active' : ''}`}
              >
                <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab === null ? 'Please select a tab' : selectedTab.content}
      </div>
    </>
  );
};

const TabsPage = () => {
  const { tabId } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <Tabs tabsArray={tabs} tabId={tabId || ''} />
    </>
  );
};

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink
            className={({ isActive }) => `navbar-item ${isActive ? 'is-active' : ''}`}
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) => `navbar-item ${isActive ? 'is-active' : ''}`}
            to="/tabs"
          >
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>

    <div className="section">
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={<h1 className="title">Home page</h1>}
          />

          <Route
            path="/home"
            element={
              <Navigate to="/" replace />
            }
          />

          <Route
            path="/tabs/"
          >
            <Route
              index
              element={<TabsPage />}
            />

            <Route
              path=":tabId"
              element={<TabsPage />}
            />

          </Route>

          <Route
            path="*"
            element={<h1 className="title">Page not found</h1>}
          />

        </Routes>
      </div>
    </div>
  </>
);
