import { createRoot } from 'react-dom/client';
import { Navigate, Route, HashRouter, Routes } from 'react-router-dom';
import { App } from './App';
import { Home } from './components/Home';
import { PageNotFound } from './components/PageNotFount';
import { Tabs } from './components/Tabs';
import { TabContent } from './components/TabContent';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />

        <Route path="tabs" element={<Tabs tabs={tabs} />}>
          <Route path=":tabId" element={<TabContent tabs={tabs} />} />
        </Route>

        <Route path="/home" element={<Navigate to="/" />} />

        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </HashRouter>,
);
