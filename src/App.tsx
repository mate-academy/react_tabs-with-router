import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { RoutesEnum } from './types/RoutesEnum';


export const App = () => {
  const currLocation = useLocation();

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink
              to={RoutesEnum.HOME}
              className={`navbar-item ${currLocation.pathname === RoutesEnum.HOME && 'is-active'}`}
            >
              Home
            </NavLink>

            <NavLink
              to={RoutesEnum.TABS}
              className={`navbar-item ${currLocation.pathname.startsWith(RoutesEnum.TABS) && 'is-active'}`}
            >
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
