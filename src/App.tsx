import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import {
  NavLink, Navigate, Route, Routes,
} from 'react-router-dom';
import './App.scss';
import { TabsPage } from './components/Tabs/Tabs';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

function HomePage() {
  return <h1 className="title">Home Page</h1>;
}

function NotFoundPage() {
  return <h1 className="title">Page not found</h1>;
}

export const App = () => {
  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive ? 'navbar-item is-active' : 'navbar-item';
              }}

            >
              Home
            </NavLink>
            <NavLink
              to="/tabs"
              className={({ isActive }) => {
                return isActive ? 'navbar-item is-active' : 'navbar-item';
              }}
            >
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          {/* <Switch> */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tabs">
              <Route index element={<TabsPage tabs={tabs} />} />
              <Route path=":tabId" element={<TabsPage tabs={tabs} />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
            <Route
              path="/home"
              element={<Navigate to="/" />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
