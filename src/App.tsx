/* eslint-disable max-len */
/* eslint-disable prettier/prettier */

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Outlet, NavLink } from 'react-router-dom';
import classNames from 'classnames';



const getLinkClass = ({ isActive }: { isActive: boolean }) => classNames("navbar-item", {
  "is-active": isActive,
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
          <NavLink to="/" className={getLinkClass}>
            Home
          </NavLink>
          <NavLink to="/tabs" className={getLinkClass}>
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>

    <div className="section">
      <div className="container">
        <Outlet />
      </div>
    </div>

    {/* <div className="section">
      <div className="container">
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