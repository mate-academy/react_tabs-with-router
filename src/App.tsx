import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import classNames from 'classnames';
import { Tabs } from './Tabs/Tabs';
import { Tab } from './types/Tab';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<Tab | null>(null);
  const [selectedPage, setSelectedPage] = useState<string>('page-1');

  const handleSelectedTab = (tab: Tab) => {
    setSelectedTab(tab);
  };

  const handleSelectedPage = (key: string) => {
    setSelectedPage(key);
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
            <Link
              key="page-1"
              to="/"
              className={classNames(
                'navbar-item', { 'is-active': selectedPage === 'page-1' },
              )}
              onClick={() => handleSelectedPage('page-1')}
            >
              Home
            </Link>
            <Link
              key="page-2"
              to="/tabs"
              className={classNames(
                'navbar-item', { 'is-active': selectedPage === 'page-2' },
              )}
              onClick={() => handleSelectedPage('page-2')}
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
              path="/"
              element={<h1 className="title">Home page</h1>}
            />
            <Route
              path="/tabs"
              element={(
                <Tabs
                  tabs={tabs}
                  selectedTab={selectedTab}
                  handleSelected={handleSelectedTab}
                />
              )}
            />
          </Routes>
          {/* <h1 className="title">Page not found</h1> */}
        </div>
      </div>
    </>
  );
};
