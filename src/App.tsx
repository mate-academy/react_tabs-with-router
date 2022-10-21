import 'bulma/css/bulma.css';
import classNames from 'classnames';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  NavLink,
  Outlet,

} from 'react-router-dom';
import { FC } from 'react';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type Props = {
  to: string
  text: string
};

export const NavigationPage:FC<Props> = ({ to, text }) => (
  <NavLink
    to={to}
    className={({ isActive }) => (
      classNames('navbar-item',
        { 'is-active': isActive })
    )}
  >
    {text}
  </NavLink>
);

export const App = () => (
  <>
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavigationPage to="/" text="Home" />
          <NavigationPage to="/tabs" text="Tabs" />
        </div>
      </div>
    </nav>

    <div className="section">
      <div className="container">
        <Outlet />
      </div>
    </div>
  </>
);
