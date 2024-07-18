import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import classNames from 'classnames';
import { Home } from './Components/Home';
import { Issues } from './Components/issues';
import { Tabs } from './Components/Tabs';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';

// const tabs = [
//   { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
//   { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
//   { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
// ];

function getLinkClass({ isActive }: { isActive: boolean }) {
  return classNames('navbar-item', { 'is-active': isActive });
}

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className={getLinkClass}>
            Home
          </NavLink>
          <NavLink to="/tabs" className={getLinkClass}>
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>

    <Routes>
      <Route index element={<Home />} />
      <Route path="home" element={<Navigate to={'/'} />} />
      <Route path="*" element={<Issues />} />
      <Route path="tabs">
        <Route path=":tabId?" element={<Tabs />} />
      </Route>
    </Routes>
  </>
);
