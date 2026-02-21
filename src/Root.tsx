import { HashRouter } from 'react-router-dom';
// import { App } from './App';

import { HomePage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';
// import { Tabs } from './components/Tabs';
import { Route, Routes } from 'react-router-dom';
import { App } from './App';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        {/* <Route path="tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId?" element={<TabsPage />} />
        </Route> */}
        <Route path="tabs/:tabId?" element={<TabsPage />} />

        <Route path="*" element={<p>Page not found</p>} />
      </Route>
    </Routes>
  </HashRouter>
);
