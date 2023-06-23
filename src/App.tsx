import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  Navigate, Route, Routes,
} from 'react-router-dom';
import { useState } from 'react';
import { MainNav } from './Components/MainNav';
import { TabsPage } from './Components/TabsPage';
import { Tab } from './types/Tab';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const [selectedTab, setSelectedTab] = useState<Tab | undefined>(undefined);

  return (
    <div className="has-navbar-fixed-top">
      <MainNav />

      <div className="section">
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={<h1 className="title">Home Page</h1>}
            />

            <Route
              path="home"
              element={<Navigate to="/" replace />}
            />

            <Route path="tabs">
              <Route
                index
                element={(
                  <TabsPage
                    tabs={tabs}
                    selectedTabId={selectedTab?.id}
                    setSelectedTab={setSelectedTab}
                  />
                )}
              />
              <Route
                path={`:${selectedTab?.id}`}
                element={(
                  <TabsPage
                    tabs={tabs}
                    selectedTabId={selectedTab?.id}
                    setSelectedTab={setSelectedTab}
                  />
                )}
              />
            </Route>

            <Route
              path="*"
              element={<h1 className="title">Page not found</h1>}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};
