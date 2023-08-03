import 'bulma/css/bulma.css';
import {
  HashRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { TabPage } from './components/TabPage';
import { Home } from './components/Home';
import { App } from './App';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="tabs">
          <Route index element={<TabPage />} />
          <Route path=":tabId" element={<TabPage />} />
        </Route>
      </Route>
      <Route path="*" element={<h1 className="title">Page not found</h1>} />
    </Routes>
    <App />
  </HashRouter>
);
