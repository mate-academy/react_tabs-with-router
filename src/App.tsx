import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import classNames from 'classnames';
import { Tabs } from './components/Tabs';
import { Home } from './components/Home';
import { Content } from './components/Content';

const getLinkClass = ({ isActive }: { isActive: boolean }) =>
  classNames('navbar-item', {
    'is-active': isActive,
  });

export const App = () => (
  <>
    <nav
      // eslint-disable-next-line max-len
      className="navbar has-navbar-fixed-top is-light is-fixed-top is-mobile has-shadow"
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
      <Route path="/" element={<Content />}>
        <Route index element={<Home />} />
        <Route path="tabs/:tabId?" element={<Tabs />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Route>
    </Routes>
  </>
);
