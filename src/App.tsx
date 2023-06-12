import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  Link, Routes, Route, Navigate, useLocation,
} from 'react-router-dom';
import classNames from 'classnames';
import { Tabs } from './components/Tabs';
import { NotFoundPage } from './components/NotFoundPage';
import { HomePage } from './components/HomePage';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const location = useLocation();

  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link
              to="/home"
              className={classNames('navbar-item', {
                'is-active': isActiveLink('/home'),
              })}

            >
              Home
            </Link>
            <Link
              to="/tabs"
              className={classNames('navbar-item', {
                'is-active': isActiveLink('/tabs'),
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
            <Route
              path="/home"
              element={<HomePage />}
            />
            <Route path="/" element={<Navigate to="/home" />} />
            <Route
              path="/tabs"
              element={(
                <Tabs tabs={tabs} />
              )}
            />
            <Route path="/tabs/:selectedTabId" element={<Tabs tabs={tabs} />} />
            <Route
              path="*"
              element={<NotFoundPage />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
};
