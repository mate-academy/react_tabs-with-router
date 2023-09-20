import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Tabs } from './pages/Tabs';
import { App, tabs } from './App';
import { PageNotFound } from './components/PageNotFound';
import { TabPage } from './pages/TabPage';

export const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="tabs" element={<Tabs />}>
            {tabs.map(tab => (
              <Route
                key={tab.id}
                path={`${tab.id}`}
                element={<TabPage tab={tab} />}
              />
            ))}
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};
