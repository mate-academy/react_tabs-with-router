import {
  NavLink,
  Link,
  Outlet,
  useParams,
  useLocation,
} from 'react-router-dom';
import classNames from 'classnames';
import 'bulma/css/bulma.css';
import { Tabs, TabList, Tab } from 'react-tabs';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const getClickClass = ({ isActive }: { isActive: boolean }) =>
  classNames('navbar-item', { 'is-active': isActive });

export const HomePage = () => <h1 className="title">Home page</h1>;

export const TabsPage = () => {
  const { tabId } = useParams();

  const selectedIndex = tabs.findIndex(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <Tabs
        selectedIndex={selectedIndex === -1 ? 0 : selectedIndex}
        onSelect={() => {}}
      >
        <div className="tabs is-boxed">
          <TabList>
            <ul>
              {tabs.map(tab => (
                <Tab
                  key={tab.id}
                  className={classNames({ 'is-active': tabId === tab.id })}
                  data-cy="Tab"
                >
                  <Link to={tab.id}>{tab.title}</Link>
                </Tab>
              ))}
            </ul>
          </TabList>
        </div>
      </Tabs>

      <div className="block" data-cy="TabContent">
        <Outlet />
      </div>
    </>
  );
};

export const TabContent = () => {
  const { tabId } = useParams();
  const currentTab = tabs.find(t => t.id === tabId);

  if (!currentTab) {
    return <>Please select a tab</>;
  }

  return (
    <div>
      <p>{currentTab?.content}</p>
    </div>
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
            <NavLink to="/" className={getClickClass}>
              Home
            </NavLink>
            <NavLink to="/tabs" className={getClickClass}>
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          {pathname === '/' ? <h1 className="title">Home page</h1> : <Outlet />}
        </div>
      </div>
    </>
  );
};
