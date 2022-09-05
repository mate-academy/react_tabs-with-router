import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  Routes, Route, Navigate,
} from 'react-router-dom';
import { Nav } from './Components/Nav';
// eslint-disable-next-line import/no-cycle
import { TabsPage } from './Components/TabsPage';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <Nav />
        </div>
      </nav>

      <div className="section">
        <div className="container">

          <Routes>
            <Route
              path="*"
              element={<h1 className="title">Page not found</h1>}
            />
            <Route
              path="/"
              element={<h1 className="title">Home page</h1>}
            />
            <Route
              path="home"
              element={<Navigate to="/" replace />}
            />
            <Route path="tabs">
              <Route index element={<TabsPage />} />
              <Route path=":tabId" element={<TabsPage />} />
            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
};
