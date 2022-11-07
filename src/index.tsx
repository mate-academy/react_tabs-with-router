import ReactDOM from 'react-dom';
import {
  HashRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { App } from './App';
import { TabsPage } from './TabsPage';

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route
        path="/"
        element={<App />}
      >
        <Route
          path="*"
          element={(
            <h1 className="title">
              Page not found
            </h1>
          )}
        />

        <Route
          index
          element={(
            <h1 className="title">
              Home page
            </h1>
          )}
        />

        <Route
          path="home"
          element={<Navigate to="/" replace />}
        />

        <Route path="tabs/">
          <Route
            index
            element={<TabsPage />}
          />

          <Route
            path=":tabId"
            element={<TabsPage />}
          />
        </Route>
      </Route>
    </Routes>
  </HashRouter>,
  document.getElementById('root'),
);
