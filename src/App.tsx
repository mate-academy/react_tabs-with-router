import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import classNames from 'classnames';

import { Routes, Route, NavLink } from 'react-router-dom';

import { HomePage } from './components/HomePage';
import { TabPage } from './components/TabPage';
import { NotFoundPage } from './components/NotFoundPage';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => {
  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav
        data-cy="nav"
        className="
          navbar
          is-fixed-top
          has-background-light
          has-navbar-fixed-top"
      >
        <div className="navbar-menu">
          <div className="navbar-start">
            <NavLink
              to="/"
              className={({ isActive }) => classNames(
                'navbar-item',
                { isActive },
              )}
            >
              Home
            </NavLink>
            <NavLink
              to="/tabs"
              className={({ isActive }) => classNames(
                'navbar-item',
                { isActive },
              )}
            >
              Tabs

            </NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <Routes>
          <Route
            path="/tabs"
          >
            <Route
              index
              element={(<TabPage tabs={tabs} />)}
            />
            <Route path=":tabId" element={<TabPage tabs={tabs} />} />
          </Route>

          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
