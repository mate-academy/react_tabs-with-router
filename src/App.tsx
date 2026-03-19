import { Outlet, NavLink } from 'react-router-dom';

const getLinkClass = ({ isActive }: { isActive: boolean }) => {
  return isActive ? 'navbar-item is-active' : 'navbar-item';
};

export const App = () => {
  return (
    <>
      <nav data-cy="Nav" className="navbar is-light px-3">
        <div className="navbar-brand">
          <NavLink to="/" end className={getLinkClass}>
            Home
          </NavLink>

          <NavLink to="/tabs" className={getLinkClass}>
            Tabs
          </NavLink>
        </div>
      </nav>

      <div className="section">
        <Outlet />
      </div>
    </>
  );
};
