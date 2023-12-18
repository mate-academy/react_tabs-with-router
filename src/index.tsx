import { createRoot } from 'react-dom/client';
import {
  HashRouter,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { App } from './App';

import { HomePage } from './HomePage';
import { Tabs } from './Tabs/Tabs';
import { PageNotFound } from './PageNotFound/PageNotFound';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <HashRouter>
      <App />
      <Routes>
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="tabs">
            <Route path=":tabId?" element={<Tabs tabs={tabs} />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </HashRouter>,
  );
