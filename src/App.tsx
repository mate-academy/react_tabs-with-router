import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import {
  Routes,
  Route,
  Link,
  NavLink,
  Navigate,
  useParams,
  useNavigate,
} from 'react-router-dom';

import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

import 'react-tabs/style/react-tabs.css';

const tabs = [
  {
    id: 'tab-1',
    title: 'Tab 1',
    content: 'Some text 1',
  },
  {
    id: 'tab-2',
    title: 'Tab 2',
    content: 'Some text 2',
  },
  {
    id: 'tab-3',
    title: 'Tab 3',
    content: 'Some text 3',
  },
];

const Navigation = () => (
  <nav
    className="navbar is-light is-fixed-top is-mobile has-shadow"
    data-cy="Nav"
  >
    <div className="container">
      <div className="navbar-brand">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `navbar-item ${isActive ? 'is-active' : ''}`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/tabs"
          className={({ isActive }) =>
            `navbar-item ${isActive ? 'is-active' : ''}`
          }
        >
          Tabs
        </NavLink>
      </div>
    </div>
  </nav>
);

const HomePage = () => <h1 className="title">Home page</h1>;

const TabsPage = () => {
  const { tabId } = useParams();
  const navigate = useNavigate();

  const selectedIndex = tabs.findIndex(tab => tab.id === tabId);

  const handleSelect = (index: number) => {
    navigate(`/tabs/${tabs[index].id}`);
  };

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <Tabs
        selectedIndex={selectedIndex >= 0 ? selectedIndex : -1}
        onSelect={handleSelect}
      >
        <TabList>
          {tabs.map(tab => (
            <Tab
              key={tab.id}
              data-cy="Tab"
              className={tab.id === tabId ? 'is-active' : ''}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </Tab>
          ))}
        </TabList>

        {tabs.map(tab => (
          <TabPanel key={tab.id}>
            <div className="block" data-cy="TabContent">
              {tab.content}
            </div>
          </TabPanel>
        ))}
      </Tabs>

      {selectedIndex === -1 && (
        <div className="block" data-cy="TabContent">
          {'Please select a tab'}
        </div>
      )}
    </>
  );
};

const NotFoundPage = () => <h1 className="title">Page not found</h1>;

export const App = () => (
  <>
    <Navigation />

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
