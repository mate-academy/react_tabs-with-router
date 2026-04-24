import cn from 'classnames';
import { Outlet, NavLink } from 'react-router-dom';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

const getIsNavActive = ({ isActive }: { isActive: boolean }) => {
  return cn('navbar-item', {
    'is-active': isActive,
  });
};

export const App = () => {
  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" className={getIsNavActive}>
              Home
            </NavLink>
            <NavLink to="/tabs" className={getIsNavActive}>
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
    </>
  );
};
