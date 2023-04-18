import ReactDOM from 'react-dom';
import {
  HashRouter, Navigate, Route, Routes,
} from 'react-router-dom';
import { TabsPage } from './Pages/TabsPage';
import { PageRoutes } from './types/PageRoutes';
import { HomePage } from './Pages/HomePage';
import { ErrorPage } from './Pages/ErrorPage';
import { App } from './App';

ReactDOM.render(
  <HashRouter>
    <Routes>

      <Route path={PageRoutes.home} element={<App />}>
        <Route index element={<HomePage />} />
        <Route
          path="home"
          element={<Navigate to={PageRoutes.home} replace />}
        />
        <Route path={PageRoutes.tabs}>
          <Route index element={<TabsPage />} />
          <Route path=":tabsId" element={<TabsPage />} />
        </Route>

        <Route path={PageRoutes.notFound} element={<ErrorPage />} />
      </Route>
    </Routes>
  </HashRouter>,
  document.getElementById('root'),
);
