import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { useState } from 'react';
import {
  Navigate, Route, Routes,
} from 'react-router-dom';
import { Tabs } from './components/Tabs';
import { Navigation } from './components/Navigation';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const [allTabs] = useState(tabs);

  return (
    <>
      <Navigation />

      <div className="section">
        <div className="container">
          <Routes>
            <Route path="tabs">
              <Route
                index
                element={(
                  <Tabs
                    tabs={allTabs}
                  />
                )}
              />
              <Route
                path=":tabId"
                element={(
                  <Tabs
                    tabs={allTabs}
                  />
                )}
              />
            </Route>
            <Route
              path="*"
              element={<h1 className="title">Page not found</h1>}
            />
            <Route
              path="/"
              element={<h1 className="title">Home page</h1>}
            />
            <Route
              path="home"
              element={<Navigate to="/" replace />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
};
