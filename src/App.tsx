import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';
import { HomePage } from './components/home';
import { Tabs } from './components/tabs';
import classNames from 'classnames';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

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

      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="tabs">
              <Route index element={<Tabs tabs={tabs} />} />
              <Route path=":tabId" element={<Tabs tabs={tabs} />} />
            </Route>
            <Route
              path="*"
              element={<h1 className="title">Page not found</h1>}
            />
            <Route
              path="/home"
              element={<Navigate to={'/'} replace={true} />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
};
