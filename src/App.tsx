import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { TabsPage } from './components/TabsPage';
import { Tab } from './types/Tab';
import tabsData from './data/data';

export const App: React.FC = () => {
  const [tabs, setTabs] = useState<Tab[]>([]);

  useEffect(() => {
    setTabs(tabsData);
  }, []);

  return (
    <>
      <Navigation />
      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<h1 className="title">Home page</h1>} />
            <Route path="home" element={<Navigate to="/" replace />} />
            <Route path="tabs" element={<TabsPage tabs={tabs} />}>
              {tabs.map(tab => (
                <Route
                  key={tab.id}
                  path=":tabId"
                  element={<h1>{tab.content}</h1>}
                />
              ))}
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
