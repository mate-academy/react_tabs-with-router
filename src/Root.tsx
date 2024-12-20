import { Routes, Route } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import { App } from './App';
import { TabsPage } from './pages/TabsPage';
import { HomePage } from './pages/HomePage';
import { TabProvider } from './components/context/TabsContext';

export const Root = () => (
  <HashRouter>
    <TabProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>
          <Route path="*" element={<p className="title">Page not found</p>} />
        </Route>
      </Routes>
    </TabProvider>
  </HashRouter>
);
