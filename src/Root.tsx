import {
  Navigate,
  Route,
  HashRouter as Router,
  Routes,
} from 'react-router-dom';
import { App } from './App';
import { GlobalProvider, TabContext } from './context/Store';
import { Home } from './components/Home';
import { NotFound } from './components/NotFound';
import { TabContent } from './components/TabContent';
import { Tabs } from './components/Tabs';
import { useContext } from 'react';

export const Root = () => {
  const tabs = useContext(TabContext);

  return (
    <Router>
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="tabs/" element={<Tabs />}>
              {tabs.map(tab => (
                <Route path=":id" element={<TabContent />} key={tab.id} />
              ))}
            </Route>
            <Route path="home" element={<Navigate to="/" />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </GlobalProvider>
    </Router>
  );
};
