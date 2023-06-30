import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  Navigate, Route, Routes,
} from 'react-router-dom';
import { MainNav } from './Components/MainNav';
import { TabsPage } from './Components/TabsPage';
import { HomePage } from './Components/HomePage';
import { PageNotFound } from './Components/PageNotFound';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  return (
    <div className="has-navbar-fixed-top">
      <MainNav />

      <div className="section">
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={<HomePage />}
            />

            <Route
              path="home"
              element={<Navigate to="/" replace />}
            />

            <Route path="tabs">
              <Route
                index
                element={(
                  <TabsPage
                    tabs={tabs}
                  />
                )}
              />
              <Route
                path=":tabId"
                element={(
                  <TabsPage
                    tabs={tabs}
                  />
                )}
              />
            </Route>

            <Route
              path="*"
              element={<PageNotFound />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};
