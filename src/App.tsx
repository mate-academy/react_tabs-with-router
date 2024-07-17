import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { Outlet, NavLink } from 'react-router-dom';
import cn from 'classnames';

const link = ({ isActive }: { isActive: boolean }) =>
  cn('navbar-item', { 'is-active': isActive });

export const App = () => (
  <>
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="conteiner">
        <div className="navbar-brand">
          <NavLink to="/" className={link}>
            Home
          </NavLink>
          <NavLink to="/tabs" className={link}>
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>

    <div className="section">
      <div className="conteiner">
        <Outlet />
      </div>
    </div>
  </>
);
