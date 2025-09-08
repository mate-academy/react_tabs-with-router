import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { TabsPovider } from './context/TabsProvider';
import { App } from './App';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';
import { PageNotFound } from './components/PageNotFound';
import { RoutesEnum } from './types/RoutesEnum';

export const Root = () => (
  <TabsPovider>
    <HashRouter>
      <Routes>
        <Route path={RoutesEnum.HOME_REDIRECT} element={<Navigate to={RoutesEnum.HOME} replace />} />
        <Route path={RoutesEnum.HOME} element={<App />}>
          <Route index element={<HomePage />} />

          <Route path={RoutesEnum.TABS}>
            <Route index element={<TabsPage />} />
            <Route path={RoutesEnum.TAB_DETAIL} element={<TabsPage />} />
          </Route>
          
          <Route path={RoutesEnum.NOT_FOUND} element={<PageNotFound />}/>
        </Route>
      </Routes>
    </HashRouter>
  </TabsPovider>
);
