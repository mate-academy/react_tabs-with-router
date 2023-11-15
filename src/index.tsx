import ReactDOM from 'react-dom';
import {
  HashRouter,
  Route,
  Routes
} from 'react-router-dom';
import { App } from './App';
import { ErrorPage } from './components/ErrorPage';
import { Home } from './components/Home';
import { Tabs } from './components/Tabs';
import { TabItem } from './components/TabItem';
import { tabs } from './api/Tabs';

ReactDOM.render(
  <HashRouter>
 <Routes>
      <Route
        path="/:path?"
        element={<App />}
      >
        <Route
          index
          element={<Home />}
        />
        <Route
          path="tabs"
          element={<Tabs />}
        >
          {tabs.map(tab => (
            <Route
              path=":tabId?"
              element={
                <TabItem key={tab.id} tab={tab} />
              }

            />
          ))}
        </Route>
        <Route
          path="*"
          element={<ErrorPage />}
        />
      </Route>
    </Routes>
  </HashRouter>,
  document.getElementById('root'),
);
