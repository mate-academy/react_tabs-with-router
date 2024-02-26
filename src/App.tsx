import 'bulma/css/bulma.css';
import {
  Routes, Route, NavLink, Navigate,
} from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import classNames from 'classnames';
import { Tabs } from './components/Tabs';
import { Tab } from './components/Tabs/Tabs/Tab';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const getLinkClass = ({ isActive }: { isActive: boolean }) => classNames(
  'navbar-item', {
    'is-active': isActive,
  },
);

const getLinkStyle = ({ isActive }: { isActive: boolean }) => ({
  color: isActive ? 'red' : '',
});

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
            className={getLinkClass}
            style={getLinkStyle}
          >
            Home
          </NavLink>
          <NavLink
            to="/tabs"
            className={getLinkClass}
            style={getLinkStyle}
          >
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/home" element={<Navigate to="/" />} />
          <Route
            path="/"
            element={<h1 className="title">Home page</h1>}
          />
          <Route path="/tabs" element={<Tabs tabs={tabs} />}>
            <Route element={<p>Please select a tab</p>} />
            <Route path="/tabs/:id?" element={<Tab tabs={tabs} />} />
          </Route>
          <Route path="*" element={<h1 className="title">Page not found</h1>} />
        </Routes>
      </div>
    </div>
  </>
);
