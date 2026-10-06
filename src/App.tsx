import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import classNames from 'classnames';

import { NotFoundPage } from './components/NotFoundPage';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';
import { Tab1 } from './components/Tab-1';
import { Tab2 } from './components/Tab-2';
import { Tab3 } from './components/Tab-3';

// const tabs = [
//   { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
//   { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
//   { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
// ];

export const App = () => (
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
            end
            className={({ isActive }) =>
              classNames('navbar-item', { 'is-active': isActive })
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/tabs"
            className={({ isActive }) =>
              classNames('navbar-item', { 'is-active': isActive })
            }
          >
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<Navigate to="/" />} />
      <Route path="/tabs/" element={<TabsPage />}>
        <Route path="tab-1" element={<Tab1 />} />
        <Route path="tab-2" element={<Tab2 />} />
        <Route path="tab-3" element={<Tab3 />} />
      </Route>
      <Route path="/tabs/*" element={<TabsPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>

    {/* <div className="section">
      <div className="container">
        <h1 className="title">Home page</h1>
        <h1 className="title">Tabs page</h1>
        <h1 className="title">Page not found</h1>

        <div className="tabs is-boxed">
          <ul>
            <li data-cy="Tab" className="is-active">
              <a href="#/">Tab 1</a>
            </li>
            <li data-cy="Tab">
              <a href="#/">Tab 2</a>
            </li>
            <li data-cy="Tab">
              <a href="#/">Tab 3</a>
            </li>
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      </div>
    </div> */}
  </>
);
