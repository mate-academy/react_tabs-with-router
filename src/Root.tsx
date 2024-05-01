import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Tabs } from './pages/Tabs';
import { TabContent } from './components/TabContent';
import { NotFound } from './pages/NotFound';
import { App } from './App';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="tabs" element={<Tabs />}>
          <Route path=":tabId?" element={<TabContent />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </Router>
);
