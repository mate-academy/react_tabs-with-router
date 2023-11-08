import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  Routes, Route, NavLink, Navigate,
} from 'react-router-dom';
import classNames from 'classnames';
import { HomePage } from './components/HomePage';
import { PageNotFound } from './components/PageNotFound';
import { Tabs } from './components/Tabs/Tabs';

const getLinkClass = ({ isActive }: { isActive: boolean }) => (
  classNames('navbar-item', {
    'is-active': isActive,
  }));

export const App = () => (
  <>
    <nav
      className="
        navbar
        is-light
        is-fixed-top
        is-mobile
        has-shadow
        has-navbar-fixed-top"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className={getLinkClass}>Home</NavLink>
          <NavLink to="/tabs" className={getLinkClass}>Tabs</NavLink>
        </div>
      </div>
    </nav>

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="home" element={<Navigate to=".." />} />
          <Route path="tabs" element={<Tabs />}>
            <Route index element={<Tabs />} />
            <Route path=":tabId" element={<Tabs />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  </>
);
