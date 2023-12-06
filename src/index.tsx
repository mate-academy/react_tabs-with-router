import { createRoot } from 'react-dom/client';
import {
  HashRouter,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';
import { App, tabs } from './App';
import { TabsPage } from './TabsPage';

createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={<App />}
        >
          <Route path="/" element={<h1 className="title">Home page</h1>} />
          <Route
            path="tabs/:tabId?"
            element={(
              <>
                <h1 className="title">
                  Tabs page
                  {' '}
                </h1>
                <Outlet />
              </>
            )}
          >
            <Route
              index
              element={(
                <TabsPage
                  tabs={tabs}
                />
              )}
            />
          </Route>
          <Route
            path="*"
            element={
              <h1 className="title">Page not found</h1>
            }
          />
        </Route>
      </Routes>
    </HashRouter>,
  );
