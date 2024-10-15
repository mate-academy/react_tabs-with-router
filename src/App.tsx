import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { Outlet, NavLink } from 'react-router-dom';
import cn from 'classnames';

export const App = () => {
  const html = document.getElementsByTagName('html')[0];

  html.classList.add('has-navbar-fixed-top');

  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    cn('navbar-item', {
      'is-active': isActive,
    });

  const getLinkStyle = ({ isActive }: { isActive: boolean }) => ({
    backgroundColor: isActive ? '#e8e8e8' : '',
  });

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" className={getLinkClass} style={getLinkStyle}>
              Home
            </NavLink>

            <NavLink to="/tabs" className={getLinkClass} style={getLinkStyle}>
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
