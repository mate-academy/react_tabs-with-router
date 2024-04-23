import { HashRouter } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { App, tabs } from './App';
import { Routes, Route } from 'react-router-dom';
import { Homepage } from './components/HomePage';
import { TabsPage } from './components/Tabs';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/home" element={<Navigate to="/" replace={true} />} />
        <Route index element={<Homepage />} />
        <Route path="tabs">
          <Route index element={<TabsPage tabs={tabs} />} />
          <Route path=":tabId" element={<TabsPage tabs={tabs} />} />
        </Route>
        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Route>
    </Routes>
  </HashRouter>
);
