import {
  Navigate,
  Route,
  HashRouter as Router,
  Routes,
} from 'react-router-dom';
import { App } from './App';
import { GlobalProvider } from './context/Store';
import { Home } from './components/Home';
import { NotFound } from './components/NotFound';
import { TabContent } from './components/TabContent';
import { Tabs } from './components/Tabs';

export const Root = () => {
  return (
    <Router>
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="tabs/" element={<Tabs />}>
              <Route path=":id" element={<TabContent />} />
            </Route>
            <Route path="home" element={<Navigate to="/" />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </GlobalProvider>
    </Router>
  );
};
