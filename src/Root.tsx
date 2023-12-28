import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { App } from './App';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './Pages/Tabs';
import { HomePage } from './Pages/HomePage';
import { PageNotFound } from './Pages/PageNotFound';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<Navigate to="/" />} />
        <Route path="/tabs">
          <Route path=":tabId?" element={<Tabs />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </Router>
);
