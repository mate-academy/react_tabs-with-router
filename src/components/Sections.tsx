import {
  Navigate, Route, Routes,
} from 'react-router-dom';
import { Tabs } from './Tabs';
import { Tab } from '../types/Tab';

type SectionsProps = {
  tabs: Tab[]
};

export const Sections = ({ tabs } : SectionsProps) => {
  return (
    <div className="section">
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <h1 className="title">Home page</h1>
            }
          />
          <Route path="/tabs">
            <Route
              index
              element={(
                <Tabs
                  tabs={tabs}
                />
              )}
            />
            <Route
              path=":tabId"
              element={(
                <Tabs
                  tabs={tabs}
                />
              )}
            />
          </Route>
          <Route
            path="/home"
            element={
              <Navigate to="/" replace />
            }
          />
          <Route
            path="*"
            element={
              <h1 className="title">Page not found</h1>
            }
          />
        </Routes>
      </div>
    </div>
  );
};
