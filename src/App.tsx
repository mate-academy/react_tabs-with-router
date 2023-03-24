import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PageTitle } from './PageTitle';
import { Tabs } from './Tabs';
import { Navigation } from './Navigation';

export const App = () => (
  <>
    <Navigation />

    <div className="section">
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={<PageTitle title="Home page" />}
          />
          <Route path="tabs">
            <Route
              index
              element={(
                <>
                  <PageTitle title="Tabs page" />
                  <Tabs />
                </>
              )}
            />
            <Route
              path=":tabsId"
              element={(
                <>
                  <PageTitle title="Tabs page" />
                  <Tabs />
                </>
              )}
            />
          </Route>
          <Route
            path="*"
            element={<PageTitle title="Page not found" />}
          />
          <Route path="/home" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  </>
);
