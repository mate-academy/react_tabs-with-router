import { createRoot } from 'react-dom/client';
import {
  HashRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { App } from './App';
import { TabsPage } from './Components/TabsPage/TabsPage';
// import { TabsPage } from './Components/TabsPage/TabsPage';

createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <HashRouter>
      <Routes>
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/" element={<App />}>
          <Route index element={<h1 className="title">Home page</h1>} />
          <Route path="tabs/tabsId?">
            <Route index element={<TabsPage />} />
            <Route path=":tabsId" element={<TabsPage />} />
          </Route>
          <Route path="*" element={<h1 className="title">Page not found</h1>} />
        </Route>
      </Routes>
    </HashRouter>,
  );
