import {
  Routes,
  Route,
  NavLink,
  useParams,
  Link,
  Navigate,
} from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import classNames from 'classnames';
import { Tab } from './types/Tab';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type Props = {
  tab: Tab,
  toLink: string,
};

export const TabComponent: React.FC<Props> = ({ tab, toLink }) => {
  const { tabId } = useParams<{ tabId: string }>();
  const isActive = tabId === tab.id;

  return (
    <li
      data-cy="Tab"
      className={classNames({ 'is-active': isActive })}
    >
      <Link to={toLink}>{tab.title}</Link>
    </li>
  );
};

export const Tabs = () => {
  const { tabId } = useParams<{ tabId: string }>();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <TabComponent
              key={tab.id}
              tab={tab}
              toLink={`/tabs/${tab.id}`}
            />
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {selectedTab ? selectedTab.content : 'Please select a tab'}
      </div>
    </>
  );
};

export const HomePage = () => {
  return (
    <h1 className="title">Home page</h1>
  );
};

export const ErrorPage = () => {
  return (
    <h1 className="title">Page not found</h1>
  );
};

const getActiveClass = ({ isActive }: { isActive: boolean }) => classNames(
  'navbar-item',
  { 'is-active': isActive },
);

export const NavigationBar = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className={getActiveClass}>Home</NavLink>
          <NavLink to="/tabs" className={getActiveClass}>Tabs</NavLink>
        </div>
      </div>
    </nav>
  );
};

export const App = () => (
  <>
    <NavigationBar />

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tabs">
            <Route index element={<Tabs />} />
            <Route path=":tabId" element={<Tabs />} />
          </Route>
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </div>
  </>
);
