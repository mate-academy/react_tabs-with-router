import React from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import classNames from 'classnames';

import { TabsContext, tabs } from './store/TabsContext';
import { HomePage } from './components/HomePage/HomePage';
import { TabsPage } from './components/TabsPage/TabsPage';
import { PageNotFound } from './components/PageNotFound/PageNotFound';

export const App = () => {
  const getNavbarItemClass = ({ isActive }: { isActive: boolean }) => {
    return classNames('navbar-item', { 'is-active': isActive });
  };

  return (
    <TabsContext.Provider value={tabs}>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" end className={getNavbarItemClass}>
              Home
            </NavLink>
            <NavLink to="/tabs" className={getNavbarItemClass}>
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/">
              <Route index element={<HomePage />}></Route>
              <Route path="home" element={<Navigate to="/" replace />}></Route>

              <Route path="tabs">
                <Route index element={<TabsPage />}></Route>
                <Route path=":tabId" element={<TabsPage />}></Route>
              </Route>

              <Route path="*" element={<PageNotFound />}></Route>
            </Route>
          </Routes>
        </div>
      </div>
    </TabsContext.Provider>
  );
};
