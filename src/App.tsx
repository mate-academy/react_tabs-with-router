import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { useState } from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  Navigate,
} from 'react-router-dom';
import { NotFoundPage } from './components/NotFoundPage';
import { Home } from './components/Home';
import { TabsPage } from './components/TabsPage';
import classNames from 'classnames';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const NavBar = () => {
  const location = useLocation();

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link
            to="/"
            className={classNames('navbar-item', {
              'is-active': location.pathname === '/',
            })}
          >
            Home
          </Link>
          <Link
            to="/tabs"
            className={classNames('navbar-item', {
              'is-active': location.pathname.startsWith('/tabs'),
            })}
          >
            Tabs
          </Link>
        </div>
      </div>
    </nav>
  );
};

export const App = () => {
  const [selectedTabId, setSelectedTabId] = useState<string | null>(null);

  const handleSelectedTab = (tabId: string | null) => {
    setSelectedTabId(tabId);
  };

  return (
    <Router>
      <NavBar />
      <div className="section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route
            path="tabs/*"
            element={
              <TabsPage
                selectedTabId={selectedTabId}
                handleSelectedTab={handleSelectedTab}
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
};
