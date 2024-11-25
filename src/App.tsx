import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { createContext } from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/Tabs';
import { ErrorPage } from './components/Error';
import classNames from 'classnames';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const Tabs = createContext({
  tabs: tabs,
});

export const App = () => {
  return (
    <Tabs.Provider value={{ tabs }}>
      <html className="has-navbar-fixed-top">
        <nav
          className="navbar is-light is-fixed-top is-mobile has-shadow"
          data-cy="Nav"
        >
          <div className="container">
            <div className="navbar-brand">
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return classNames('navbar-item', {
                    'is-active': isActive,
                  });
                }}
              >
                Home
              </NavLink>
              <NavLink
                to="/tabs"
                className={({ isActive }) => {
                  return classNames('navbar-item', {
                    'is-active': isActive,
                  });
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
              <Route path="/" element={<HomePage />} />
              <Route path="/home" element={<Navigate to="/" />} />
              <Route path="/tabs">
                <Route index element={<TabsPage />} />
                <Route path=":tabId?" element={<TabsPage />} />
              </Route>
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </div>
        </div>
      </html>
    </Tabs.Provider>
  );
};
