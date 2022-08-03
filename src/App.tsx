import {
  NavLink,
  Route,
  Routes,
} from 'react-router-dom';
import 'bulma';
import { useState } from 'react';
import { tabs } from './api/tabs';
import { Tab } from './types/Tab';
import { Tabs } from './conponents/Tabs';
import { TabsPage } from './conponents/TabsPage';

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<Tab | null>(null);

  const onSelect = (tab: Tab | null) => {
    setSelectedTab(tab);
  };

  return (
    <div className="App">
      <nav className="navbar has-text-centered">
        <NavLink to="/" className="navbar-item">
          Home
        </NavLink>
        <NavLink to="/tabs" className="navbar-item">
          Tabs
        </NavLink>
      </nav>

      <Routes>
        <Route
          path="/"
          element={(
            <h1 className="title has-text-centered">
              Home page
            </h1>
          )}
        />

        <Route
          path="tabs"
          element={<Tabs tabs={tabs} selectedTabId={selectedTab?.id} />}
        >
          <Route
            index
            element={(
              <TabsPage
                onSelect={onSelect}
                selectedTab={selectedTab}
              />
            )}
          />

          <Route
            path=":tabId"
            element={(
              <TabsPage
                onSelect={onSelect}
                selectedTab={selectedTab}
              />
            )}
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
