import { HashRouter, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { TabProvider } from './components/Tabs/TabContext';
import { HomePage } from './components/HomePage';
import { Tabs } from './components/Tabs';

export const Root = () => (
  <HashRouter>
    <TabProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="tabs">
            <Route index element={<Tabs />} />
            <Route path=":tabId?" element={<Tabs />} />
          </Route>
          <Route
            path="*"
            element={<p className="title">Page not found</p>}
          />
        </Route>
      </Routes>
    </TabProvider>
  </HashRouter>
);
