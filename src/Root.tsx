import {
  Route, HashRouter as Router, Routes, Navigate,
} from 'react-router-dom';

import { App } from './App';
import { Home } from './Pages/Home';
import { Tabs } from './Pages/Tabs';
import { TabContent } from './Pages/TabContent';
// import { TabExeptionalMessages } from './types/TabExeptionalMessages';

export const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="tabs" element={<Tabs />}>
            <Route path=":tabId?" element={<TabContent />} />
          </Route>
          <Route path="*" element={<h1 className="title">Page not found</h1>} />
        </Route>
      </Routes>
    </Router>
  );
};
