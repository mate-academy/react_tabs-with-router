import {
  HashRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { TabsProvider } from './store/TabsContext';
import { HomePage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';
import { PageNotFound } from './pages/PageNotFound';
import { App } from './App';

export const Root = () => (
  <HashRouter>
    <TabsProvider>
      <Routes>
        <Route path="/home" element={<Navigate to="/" />} />

        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />

          <Route path="tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </TabsProvider>
  </HashRouter>
);
