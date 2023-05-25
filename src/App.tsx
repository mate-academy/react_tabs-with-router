import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { TabsComponent } from './components/TabsComponent';
import { NavigationBar } from './components/NavigationBar';

export const App = () => {
  return (
    <>
      <NavigationBar />

      <div className="section">
        <div className="container">
          <Routes>
            <Route
              path="*"
              element={(
                <h1 className="title">Page not found</h1>
              )}
            />
            <Route
              path="/tabs"
            >
              <Route
                index
                element={(
                  <TabsComponent />
                )}
              />
              <Route
                path=":chosenTabId"
                element={(
                  <TabsComponent />
                )}
              />
            </Route>
            <Route
              path="/"
              element={(
                <h1 className="title">Home page</h1>
              )}
            />
          </Routes>
        </div>
      </div>
    </>
  );
};
