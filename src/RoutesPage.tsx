import {
  Navigate, Outlet, Route, Routes,
} from 'react-router-dom';
import { TabsPage } from './TabsPage';
import { Tab } from './types/Tab';
// import { tabs } from './App';

interface Props {
  tabs: Tab[];
}

export const RoutesPage: React.FC<Props> = ({ tabs }) => {
  return (
    <div className="container">
      <Routes>
        <Route
          path="/"
          element={<h1 className="title">Home page</h1>}
        />
        <Route
          path="home"
          element={<Navigate to="/" replace />}
        />
        <Route
          path="*"
          element={<h1 className="title">Page not found</h1>}
        />
        <Route
          path="tabs"
          element={(
            <>
              <Outlet />
            </>
          )}
        >
          <Route index element={<TabsPage tabs={tabs} />} />
          <Route path=":tabId" element={<TabsPage tabs={tabs} />} />
        </Route>
      </Routes>
    </div>
  );
};
