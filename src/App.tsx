import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import {
  Routes, Route, NavLink, Navigate,
} from 'react-router-dom';

import TabsPage from './components/Tabs';
import { HomePage } from './components/HomePage';
import { NotFoundPage } from './components/NotFoundPage';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => {
  return (
    <>
      <nav className="navbar is-fixed-top has-background-light" data-cy="nav">
        <div className="navbar-menu">
          <div className="navbar-start">
            <NavLink
              className="navbar-item isActive"
              to="/"
            >
              Home page
            </NavLink>

            <NavLink
              className="navbar-item isActive"
              to="/tabs"
            >
              Tabs Page
            </NavLink>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={(<HomePage />)} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="tabs/:tabId" element={<TabsPage tabs={tabs} />} />
        <Route path="/tabs" element={<TabsPage tabs={tabs} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
