import {
  HashRouter as Router, Navigate, Route, Routes,
} from 'react-router-dom';
import { App } from './App';
import { TabsPage } from './components/TabsPage';
import { AppRoute } from './enums/AppRouts';

export const Root = () => {
  return (
    <Router>
      <Routes>

        <Route path={AppRoute.ROOT} element={<App />}>
          <Route
            index
            element={<h1 className="title">Home page</h1>}
          />

          <Route path={AppRoute.TABS}>
            <Route index element={<TabsPage />} />
            <Route path={AppRoute.TAB} element={<TabsPage />} />
          </Route>

          <Route
            path={AppRoute.ANY}
            element={<h1 className="title">Page not found</h1>}
          />

          <Route
            path={AppRoute.HOME}
            element={<Navigate to={AppRoute.ROOT} />}
          />
        </Route>
      </Routes>
    </Router>
  );
};
