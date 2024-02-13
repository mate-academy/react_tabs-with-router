import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Home } from './Components/Home';
import { Tabs } from './Components/Tabs';
import { NotFound } from './Components/NotFound';
import { App } from './App';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/home" element={<Navigate to="/" />} />

      <Route path="/" element={<App />}>
        <Route
          index
          element={<Home />}
        />
        <Route path="tabs">
          <Route index element={<Tabs tabs={tabs} />} />
          <Route path=":tabId" element={<Tabs tabs={tabs} />} />
        </Route>
        <Route
          path="*"
          element={<NotFound />}
        />
      </Route>

    </Routes>
  </Router>
);
