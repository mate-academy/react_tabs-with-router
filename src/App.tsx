import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';
import { HomePages } from './pages/HomePages';
import { TabsPage } from './pages/TabsPage';
import { NotFound } from './pages/NotFound';
import { getTitle } from './utils/getTitle';
import { isActive } from './utils/isActive';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const location = useLocation();
  const title = getTitle(location.pathname);

  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link
              to="/"
              className={`navbar-item ${isActive(location.pathname, '/') ? 'is-active' : ''}`}
            >
              Home
            </Link>
            <Link
              to="/tabs"
              className={`navbar-item ${isActive(location.pathname, '/tabs') ? 'is-active' : ''}`}
            >
              Tabs
            </Link>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/home" element={<Navigate to="/" replace />}></Route>
            <Route path="/" element={<HomePages title={title} />} />
            <Route path="/tabs">
              <Route index element={<TabsPage tabs={tabs} title={title} />} />
              <Route
                path=":tabId"
                element={<TabsPage tabs={tabs} title={title} />}
              />
            </Route>
            <Route path="*" element={<NotFound title={title} />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
