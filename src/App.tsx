import React from 'react';
import {
  Routes, Route, NavLink, Outlet, useLocation,
} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import TabsPage from './components/TabsPage/TabsPage';
import TabContent from './components/TabContent/TabContent';
import './App.scss';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <>
      <nav className="LinksContainer">
        <NavLink
          className={
            pathname === '/'
              ? 'PageLink PageLink-selected'
              : 'PageLink'
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={
            pathname === '/tabs'
              ? 'PageLink PageLink-selected'
              : 'PageLink'
          }
          to="/tabs"
        >
          Tabs
        </NavLink>
      </nav>

      <div className="App">
        <h1
          className="Title"
        >
          Tabs with router
        </h1>
      </div>

      <Routes>
        <Route index element={<HomePage />} />
        <Route
          path="/tabs"
          element={(
            <TabsPage
              tabs={tabs}
            />
          )}
        >
          <Route
            path=":tabId"
            element={(
              <TabContent
                tabs={tabs}
              />
            )}
          />
        </Route>
      </Routes>
      <Outlet />
    </>
  );
};

export default App;
