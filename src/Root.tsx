import {
  Navigate,
  Route,
  HashRouter as Router,
  Routes,
} from 'react-router-dom';
import { App } from './App';
import { Home } from './components/Home';
import { Tabs } from './components/Tabs';
import { useContext } from 'react';
import { TabContext } from './components/TabProvide';

export const Root = () => {
  const { currentTab } = useContext(TabContext);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Navigate to=".." />} />
          <Route path="tabs" element={<Tabs />}>
            <Route index element={<>Please select a tab</>} />
            <Route
              path=":tabId"
              element={
                currentTab && currentTab.content ? (
                  <>{currentTab.content}</>
                ) : (
                  <>Please select a tab</>
                )
              }
            />
          </Route>
          <Route path="*" element={<h1 className="title">Page not found</h1>} />
        </Route>
      </Routes>
    </Router>
  );
};
