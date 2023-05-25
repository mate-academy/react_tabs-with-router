import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { TabsComponent } from './components/TabsComponent';
import { NavigationBar } from './components/NavigationBar';
import { HomePage } from './components/HomePage';
import { PageNotFound } from './components/PageNotFound';

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
                <PageNotFound />
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
                <HomePage />
              )}
            />
          </Routes>
        </div>
      </div>
    </>
  );
};
