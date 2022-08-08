import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import {
  Routes, Route, NavLink, Navigate,
} from 'react-router-dom';

import { TabsPage } from './components/TabsPage';
import { Tab } from './types/Tab';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  return (
    <>
      <nav className="navbar is-fixed-top has-background-light" data-cy="nav">
        <div className="navbar-menu">
          <div className="navbar-start">
            <NavLink
              to="/"
              className={({ isActive }) => (
                isActive ? 'navbar-item is-active' : 'navbar-item'
              )}
            >
              Home
            </NavLink>
            <NavLink
              to="/tabs"
              className={({ isActive }) => (
                isActive ? 'navbar-item is-active' : 'navbar-item'
              )}
            >
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <Routes>
          <Route path="/" element={<h1 className="title">Home page</h1>} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<h1 className="title">Page not found</h1>} />
          <Route
            path="/tabs"
            element={(
              <TabsPage
                tabs={tabs}
              />
            )}
          >
            <Route index />
            <Route path=":tabId" />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
