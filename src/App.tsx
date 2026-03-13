import {
  NavLink,
  Link,
  Outlet,
  useParams,
  useLocation,
} from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import classNames from 'classnames';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const getClickClass = ({ isActive }: { isActive: boolean }) =>
  classNames('navbar-item', { 'is-active': isActive });

export const TabsPage = () => {
  const { pathname } = useLocation();

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isActive = pathname.endsWith(tab.id);

            return (
              <li
                key={tab.id}
                className={classNames({ 'is-active': isActive })}
                data-cy="Tab"
              >
                <Link to={tab.id}>{tab.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        <Outlet />
      </div>
    </>
  );
};

export const TabContent = () => {
  const { tabsId } = useParams();
  const currentTab = tabs.find(t => t.id === tabsId);

  if (!currentTab) {
    return <>Please select a tab</>;
  }

  return (
    <div>
      <p>{currentTab?.content}</p>
    </div>
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
        <Outlet />
      </div>
    </div>
  </>
);
