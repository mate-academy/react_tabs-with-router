import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import {
  Link,
  Route,
  Routes,
  Navigate,
  useLocation,
} from 'react-router-dom';

import { HomePage } from './Pages/HomePage';
import { TabsPage } from './Pages/TabsPage';
import { PageNotFound } from './Pages/PageNotFound';
import classNames from 'classnames';

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
                'is-active':
                  pathname === '/tabs' || pathname.startsWith('/tabs/'),
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

            <Route path="tabs">
              <Route index element={<TabsPage />} />
              <Route path=":tabId" element={<TabsPage />} />
            </Route>

            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
