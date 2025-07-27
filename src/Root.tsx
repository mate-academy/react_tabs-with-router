import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { Home } from './components/Home';
import { LayoutTabs } from './components/LayoutTabs';
import { TabContent } from './components/TabContent';
import { NotFound } from './components/NotFound';
import { TabsProvider } from './context/ContextCreate';
import { SelectTab } from './components/SelectTab';

// const tabs = [
//   { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
//   { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
//   { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
// ];

export const Root = () => (
  <HashRouter>
    <TabsProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="tabs" element={<LayoutTabs />}>
            <Route index element={<SelectTab />} />
            <Route path=":tabId" element={<TabContent />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </TabsProvider>
  </HashRouter>
);
