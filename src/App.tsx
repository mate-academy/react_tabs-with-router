import { Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import classNames from 'classnames';
import { HomePage } from './pages/homePage';
import { TabsPage } from './pages/tabsPage';

// const tabs = [
//   { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
//   { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
//   { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
// ];

const getLinkClass = (currentPath: string, targetLocation: string) => {
  const isActive =
    targetLocation === '/'
      ? currentPath === '/'
      : currentPath.startsWith(targetLocation);

  return classNames('navbar-item', {
    'is-active': isActive,
  });
};

export const App = () => {
  const { pathname } = useLocation();

  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className={getLinkClass(pathname, '/')}>
              Home
            </Link>
            <Link to="/tabs" className={getLinkClass(pathname, '/tabs')}>
              Tabs
            </Link>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="tabs">
              <Route index element={<TabsPage />} />
              <Route path=":tabId" element={<TabsPage />} />
            </Route>
            <Route
              path="/*"
              element={<h1 className="title">Page not found</h1>}
            />
            <Route path="/home" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
