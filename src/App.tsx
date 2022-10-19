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
import { Navigation } from './Components/Navigation';

export const App = () => {
  return (
    <>
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
                  <TabsPage />
                )}
              />

              <Route
                path=":tabId"
                element={(
                  <TabsPage />
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
