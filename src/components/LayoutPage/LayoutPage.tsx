import { NavLink, Outlet } from 'react-router-dom';
import { getClassNames } from '../../utils';

export const LayoutPage = () => {
  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" className={getClassNames}>
              Home
            </NavLink>
            <NavLink to="/tabs" className={getClassNames}>
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};
