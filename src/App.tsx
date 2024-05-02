import 'bulma/css/bulma.css';
import cn from 'classnames';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  Link,
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { useState } from 'react';
import { Tab } from './types/Tab';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const Home: React.FC = () => {
  return <h1 className="title">Home page</h1>;
};

const Tabs: React.FC = () => {
  const [selectedTab, setSelecedTab] = useState<Tab | null>(null);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                key={tab.id}
                onClick={() => setSelecedTab(tab)}
                data-cy="Tab"
                className={cn({ 'is-active': selectedTab?.id === tab.id })}
              >
                <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {selectedTab ? selectedTab.content : 'Please select a tab'}
      </div>
      <Outlet />
    </>
  );
};

const NotFound: React.FC = () => {
  return <h1 className="title">Page not found</h1>;
};

export const App = () => {
  const location = useLocation();

  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link
              to="/"
              className={cn('navbar-item', {
                'is-active': location.pathname === '/',
              })}
            >
              Home
            </Link>
            <Link
              to="/tabs"
              className={cn('navbar-item', {
                'is-active': location.pathname.startsWith('/tabs'),
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
            <Route path="/home" element={<Navigate to="/" replace={true} />} />
            <Route path="/" element={<Home />} />

            <Route path="/tabs">
              <Route index element={<Tabs />} />
              <Route path=":tabId" element={<Tabs />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
