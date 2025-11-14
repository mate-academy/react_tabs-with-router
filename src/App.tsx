/* eslint-disable prettier/prettier */
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { TabsPage } from './components/TabsPage/TabsPage';
import {  Route, Routes, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const location = useLocation();

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
              className={location.pathname === '/' ? 'is-active' : ''}
            >
              Home
            </Link>

            <Link
              to="/tabs"
              className={
                location.pathname.startsWith('/tabs') ? 'is-active' : ''
              }
            >
              Tabs
            </Link>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Routes>
            <Route path="home" element={<Navigate to="/" replace />} />

            <Route path="/" element={<h1 className="title">Home page</h1>} />

            <Route path="tabs" >
              <Route  path="tabs"
                element={<TabsPage tabs={tabs} defaultTabId="tab-1" />} />

              <Route  index
                element={<TabsPage tabs={tabs} defaultTabId="tab-1" />} />
              <Route  path=":tabId"
                element={<TabsPage tabs={tabs} defaultTabId="tab-1" />} />
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
};
