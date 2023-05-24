import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  Navigate, NavLink, Route, Routes,
} from 'react-router-dom';
import classNames from 'classnames';
import { FC } from 'react';
import { LinkProps, Tabs } from './components/Tabs';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const NavItem: FC<LinkProps> = ({ path, title }) => {
  return (
    <NavLink
      className={({ isActive }) => classNames(
        { 'has-background-grey-lighter': isActive },
        'navbar-item',
      )}
      to={path}
    >
      {title}
    </NavLink>
  );
};

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavItem path="/" title="Home" />
          <NavItem path="/tabs" title="Tabs" />
        </div>
      </div>
    </nav>

    <div className="section">
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={<h1 className="title">Home page</h1>}
          />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="tabs/*" element={<Tabs tabs={tabs} />}>
            <Route path=":tabId" element={<Tabs tabs={tabs} />} />
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
