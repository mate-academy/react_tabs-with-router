import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import classNames from 'classnames';
import {
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom';

import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { useEffect, useState } from 'react';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const HomePage = () => <h1 className="title">Home page</h1>;
const NotFoundPage = () => <h1 className="title">Page not found</h1>;

const TabsPage = () => {
  const { tabId } = useParams();

  const initialIndex = tabs.findIndex(t => t.id === tabId);
  const isTabValid = initialIndex !== -1;

  const [selectedIndex, setSelectedIndex] = useState(
    isTabValid ? initialIndex : 0,
  );

  useEffect(() => {
    if (isTabValid) {
      setSelectedIndex(initialIndex);
    }
  }, [initialIndex, isTabValid]);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <Tabs
        selectedIndex={isTabValid ? selectedIndex : -1}
        onSelect={handleSelect}
      >
        <div className="tabs is-boxed">
          <TabList>
            {tabs.map(tab => (
              <Tab key={tab.id} data-cy="Tab" selectedClassName="is-active">
                <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
              </Tab>
            ))}
          </TabList>
        </div>

        <div className="block" data-cy="TabContent">
          {!isTabValid && 'Please select a tab'}

          {tabs.map(tab => (
            <TabPanel key={tab.id}>{tab.content}</TabPanel>
          ))}
        </div>
      </Tabs>
    </>
  );
};

export const App = () => {
  const { pathname } = useLocation();

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
                'is-active': pathname === '/',
              })}
            >
              Home
            </Link>
            <Link
              to="/tabs"
              className={classNames('navbar-item', {
                'is-active': pathname.startsWith('/tabs'),
              })}
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
            <Route path="tabs">
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
