import '@fortawesome/fontawesome-free/css/all.css';
import 'bulma/css/bulma.css';
import {
  NavLink,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import './App.scss';
import cn from 'classnames';
import { Home } from './components/Home';
import { NotFound } from './components/NotFound';
import { Tabs } from './components/Tabs';
import { Tab } from './types/Tab';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => (
  <>
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink
            to="/"
            className={({ isActive }) => cn(
              'navbar-item',
              { 'is-active': isActive },
            )}
          >
            Home
          </NavLink>
          <NavLink
            to="tabs"
            className={({ isActive }) => cn(
              'navbar-item',
              { 'is-active': isActive },
            )}
          >
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="tabs/*" element={<Tabs tabs={tabs} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  </>
);
