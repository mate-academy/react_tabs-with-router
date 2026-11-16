import { HashRouter, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { Home } from './component/home';
import { Tabs } from './component/Tabs';
import { Default } from './component/DefaultPage';
import { TabContent } from './component/TabsContent';

export const MainRoutes = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="tabs" element={<Tabs />}>
          <Route index element={<TabContent />} />
          <Route path=":tabsId" element={<TabContent />} />
        </Route>
        <Route path="*" element={<Default />} />
      </Route>
    </Routes>
  </HashRouter>
);
