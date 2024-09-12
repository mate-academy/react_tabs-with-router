import { NavLink, Outlet } from 'react-router-dom';
import { getLinkClass } from './utils/getLinkClass';

export const App = () => {
  return (
    <>
      <nav
        className="
        navbar
        is-light
        is-fixed-top
        is-mobile
        has-shadow
        has-navbar-fixed-top
      "
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
    </>
  );
};
