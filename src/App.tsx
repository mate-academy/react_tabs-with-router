import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { Routes, Route, Navigate, NavLink } from 'react-router-dom';
import cn from 'classnames';

import { Tabs } from './components/Tabs';
import { Home } from './components/Home';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const getLinkStyle = ({ isActive }: { isActive: boolean }) =>
  cn('navbar-item', { 'is-active': isActive });

export const App = () => (
  <>
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className={getLinkStyle}>
            Home
          </NavLink>
          <NavLink to="tabs" className={getLinkStyle}>
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Navigate to="/" />} />
          <Route path="tabs">
            <Route index element={<Tabs tabs={tabs} />} />
            <Route path=":tabId" element={<Tabs tabs={tabs} />} />
          </Route>
          <Route path="*" element={<h1 className="title">Page not found</h1>} />
        </Routes>
      </div>
    </div>
  </>
);
