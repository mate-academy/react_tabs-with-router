import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tab } from './types/Tab';
import { MainNav } from './MainNav';
import { TabsPage } from './TabsList';

export const App: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState('');

  const handleTabSelected = (
    tab: Tab,
  ) => {
    setSelectedTabId(tab.id);
  };

  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <MainNav />

      <div className="section">
        <Routes>
          <Route
            path="/"
            element={(
              <div className="container">
                <h1 className="title">Home page</h1>
              </div>
            )}
          />
          <Route
            path="/tabs"
            element={(
              <TabsPage
                selectedTabId={selectedTabId}
                handleTabSelected={handleTabSelected}
              />
            )}
          />
          <Route
            path="*"
            element={(
              <div className="container">
                <h1 className="title">Page not found</h1>
              </div>
            )}
          />
        </Routes>
      </div>
    </>
  );
};
