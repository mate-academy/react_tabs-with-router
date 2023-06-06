import 'bulma/css/bulma.css';
import { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Route, Routes, NavLink } from 'react-router-dom';
import cn from 'classnames';
import { ComponentTitle } from './components/homePage';
import { Tabs } from './components/tabs';
import { NotFoundPage } from './notFoundPage';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const [selectedTabId, setSelectedTabId] = useState('');

  const handleSelectedTab = (tabId: string) => {
    setSelectedTabId(tabId);
  };

  const handleHomeClick = () => {
    setSelectedTabId('');
  };

  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink
              className={({ isActive }) => (
                cn(
                  'navbar-item',
                  {
                    'is-active': isActive,
                  },
                )
              )}
              replace
              to="/"
              onClick={handleHomeClick}
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => (
                cn(
                  'navbar-item',
                  {
                    'is-active': isActive,
                  },
                )
              )}
              to="/tabs"
            >
              Tabs
            </NavLink>

          </div>
        </div>
      </nav>

      <div className="section">
        <Routes>
          <Route
            path="/"
            element={<ComponentTitle />}
          />

          <Route path="tabs">
            <Route
              index
              element={(
                <Tabs
                  tabs={tabs}
                  setTabId={handleSelectedTab}
                  selectedTabId={selectedTabId}
                />
              )}
            />
            <Route
              path={`:${selectedTabId}`}
              element={(
                <Tabs
                  tabs={tabs}
                  setTabId={handleSelectedTab}
                  selectedTabId={selectedTabId}
                />
              )}
            />
          </Route>
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
};
