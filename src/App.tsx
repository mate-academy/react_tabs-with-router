import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { Tabs } from './pages/Tabs';
import cn from 'classnames';

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
              className={({ isActive }) => {
                return cn('navbar-item', { 'is-active': isActive });
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/tabs"
              className={({ isActive }) => {
                return cn('navbar-item', { 'is-active': isActive });
              }}
            >
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/">
              <Route
                path="/home"
                element={<Navigate to="/" replace={true} />}
              />
              <Route index element={<h1 className="title">Home page</h1>} />
              <Route path="tabs">
                <Route path=":tabId?" element={<Tabs tabs={tabs} />} />
              </Route>
            </Route>
            <Route
              path="*"
              element={<h1 className="title">Page not found</h1>}
            />
          </Routes>
        </div>
      </div>
    </>
  );
};
