import { Route, Routes, HashRouter } from 'react-router-dom';
import { HomePage } from './components/pages/Home';
import { App } from './App';
import { TabProvider } from './store/TabContex';
import { TabsPage } from './components/pages/TabsPage';
import { ErrorPage } from './components/pages/ErrorPage';

export const Root = () => (
  <TabProvider>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route
            path="tabs/:tabId?"
          >
            <Route
              index
              element={<TabsPage />}
            />

            <Route
              path=":tabId"
              element={<TabsPage />}
            />

          </Route>

          <Route
            path="*"
            element={<ErrorPage />}
          />

        </Route>
      </Routes>
    </HashRouter>
  </TabProvider>

);
