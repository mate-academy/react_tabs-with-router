import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import {
  Navigate,
  NavLink,
  Route,
  Routes,
} from 'react-router-dom';
import { Tabs } from './Components/Tabs/Tabs';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <nav className="navbar is-fixed-top has-background-light" data-cy="nav">
      <div className="navbar-menu">
        <div className="navbar-start">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive
              ? 'navbar-item is-active'
              : 'navbar-item')}
          >
            Home
          </NavLink>
          <NavLink
            to="tabs"
            className={({ isActive }) => (isActive
              ? 'navbar-item is-active'
              : 'navbar-item')}
          >
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>

    <div className="section">
      <Routes>
        <Route path="/" element={<h1 className="title">Home page</h1>} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route
          path="/tabs"
          element={(
            <Tabs tabs={tabs} />
          )}
        >
          <Route path=":tabId" element={<Tabs tabs={tabs} />} />
        </Route>

        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Routes>
    </div>
  </>
);

export default App;
