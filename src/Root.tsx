import { HashRouter, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { Tabs } from './components/Tabs';
import { HomeRedirect } from './components/HomeRedirect';

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
          <Route path="home" element={<HomeRedirect />} />
          <Route index element={<h1 className="title">Home page</h1>} />
          <Route path="tabs">
            <Route path=":tabId?" element={<Tabs tabs={tabs} />} />
          </Route>
          <Route path="*" element={<h1 className="title">Page not found</h1>} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
