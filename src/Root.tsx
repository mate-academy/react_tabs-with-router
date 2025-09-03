import { TabsPage } from './components/TabsPage';
import { Routes, Route, HashRouter, Navigate } from 'react-router-dom';
import { App } from './App';
import { HomePage } from './components/HomePage';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const Root = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route index element={<HomePage />} />
          <Route path="tabs">
            <Route index element={<TabsPage tabs={tabs} />}></Route>
            <Route path=":tabId" element={<TabsPage tabs={tabs} />}></Route>
          </Route>
          <Route
            path="*"
            element={<h1 className="title">Page not found</h1>}
          ></Route>
        </Route>
      </Routes>
    </HashRouter>
  );
};
