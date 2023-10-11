import {
  HashRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Home } from './components/Home';
import { Tabs } from './components/Tabs';
import { ErrorPage } from './components/ErrorPage';
import { TabsContent } from './components/TabsContent';
import { App } from './App';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="tabs" element={<Tabs />}>
          <Route path=":tabId" element={<TabsContent />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  </HashRouter>
);
