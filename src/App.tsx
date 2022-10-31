import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import {
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import { MainNav } from './components/MainNav';
import { TabsList } from './components/TabsList';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => (
  <>
    <MainNav />

    <div className="section">
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={<h1 className="title">Home page</h1>}
          />
          <Route
            path="home"
            element={<Navigate to="/" replace />}
          />
          <Route
            path="tabs"
          >
            <Route
              index
              element={<TabsList tabs={tabs} />}
            />
            <Route
              path=":tabId"
              element={<TabsList tabs={tabs} />}
            />
          </Route>
          <Route
            path="*"
            element={<h1 className="title">Page not found</h1>}
          />
        </Routes>
      </div>
    </div>
  </>
);
