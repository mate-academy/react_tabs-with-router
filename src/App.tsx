import 'bulma/css/bulma.css';
import cn from 'classnames';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  Routes, Route, NavLink, Navigate,
} from 'react-router-dom';
import { HomePage } from './HomePage';
import { TabsPage } from './TabsPage';

const getLinkClass = ({ isActive }: { isActive: boolean }) => cn('navbar-item',
  { 'is-active': isActive });

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
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
      <Routes>
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/" element={<HomePage />} />
        <Route path="tabs">
          <Route path=":tabId?" element={<TabsPage />} />
        </Route>
        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Routes>
    </div>

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
