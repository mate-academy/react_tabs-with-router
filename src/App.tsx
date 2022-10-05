import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { HomePage } from './Components';
import { NotFoundPage } from './Components/NotFoundPage';
import { TabsPage } from './Components/TabsPage';
import { Tab } from './types/Tab';
import { Navigation } from './Components/Navigation';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <Navigation />

      <div className="section">
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage />
              }
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
              element={
                <NotFoundPage />
              }
            />
          </Routes>
        </div>
      </div>
    </>
  );
};
