import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  NavLink, Navigate, Route, Routes,
} from 'react-router-dom';
import classNames from 'classnames';
import { Tabs } from './components/Tabs';

const navLinkActive = ({ isActive }: { isActive: boolean }) => (
  classNames('navbar-item', { 'is-active': isActive })
);

export const App = () => (
  <>
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className={navLinkActive}>Home</NavLink>
          <NavLink to="/tabs" className={navLinkActive}>Tabs</NavLink>
        </div>
      </div>
    </nav>

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="*" element={<h1 className="title">Page not found</h1>} />
          <Route path="/" element={<h1 className="title">Home page</h1>} />
          <Route path="home" element={<Navigate to="/" />} />
          <Route path="tabs">
            <Route path=":tabId?" element={<Tabs />} />
          </Route>
        </Routes>
      </div>
    </div>
  </>
);
