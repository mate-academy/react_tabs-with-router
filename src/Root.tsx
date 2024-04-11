import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { App } from './App';
import { Home } from './components/Home';
import { Tabs } from './components/Tabs';
import { Tab } from './components/Tab';
import { NotFound } from './components/Messages/NotFound';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Navigate to="/" />} />
        <Route path="tabs" element={<Tabs />}>
          <Route path=":tabId" element={<Tab />} />
          <Route path="*" element={<Navigate to="/tabs" />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </Router>
);
