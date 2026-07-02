import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import classNames from 'classnames';
import {
  Routes,
  Route,
  Navigate,
  Link,
  useLocation,
} from 'react-router-dom';

import { Tabs } from './components/Tabs/Tabs';
import { Home } from './components/Home/Home';
import { NotFound } from './components/NotFound/NotFound';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const { pathname } = useLocation();

  const isHomeActive = pathname === '/';
  const isTabsActive = pathname.startsWith('/tabs');

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <div
              className={classNames('navbar-item', {
                'is-active': isHomeActive,
              })}
            >
              <Link to="/">Home</Link>
            </div>

            <div
              className={classNames('navbar-item', {
                'is-active': isTabsActive,
              })}
            >
              <Link to="/tabs">Tabs</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />

          <Route path="tabs">
            <Route index element={<Tabs tabs={tabs} />} />
            <Route path=":tabId" element={<Tabs tabs={tabs} />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};
