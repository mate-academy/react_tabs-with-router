import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  Routes, Route, Navigate, NavLink,
} from 'react-router-dom';
import cn from 'classnames';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';
import { ErrorPage } from './components/ErrorPage';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink
              to="/"
              className={
                ({ isActive }) => cn(
                  'navbar-item', {
                    'is-active': isActive,
                  },
                )
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/tabs"
              className={
                ({ isActive }) => cn(
                  'navbar-item', {
                    'is-active': isActive,
                  },
                )
              }
            >
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Routes>
            <Route path="*" element={<ErrorPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<Navigate to="/" />} />
            <Route path="tabs">
              <Route index element={<TabsPage tabs={tabs} />} />
              <Route path=":tabId" element={<TabsPage tabs={tabs} />} />
              <Route
                path="/tabs"
                element={
                  <TabsPage tabs={tabs} />
                }
              />
            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
};
