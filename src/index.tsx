import ReactDOM from 'react-dom';
import {
  HashRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Tabs } from './components/Tabs/Tabs';

import { App } from './App';
import { TabsProvider } from './store/TabsContext';

ReactDOM.render(
  <HashRouter>
    <TabsProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<h1 className="title">Home page</h1>} />
          <Route path="home" element={<Navigate to=".." />} />
          <Route path="tabs">
            <Route
              index
              element={(
                <>
                  <h1 className="title">Tabs page</h1>
                  <Tabs />
                </>
              )}
            />
            <Route
              path=":tabId"
              element={(
                <>
                  <h1 className="title">Tabs page</h1>
                  <Tabs />
                </>
              )}
            />
          </Route>
          <Route path="*" element={<h1 className="title">Page not found</h1>} />
        </Route>
      </Routes>
    </TabsProvider>
  </HashRouter>,
  document.getElementById('root'),
);
