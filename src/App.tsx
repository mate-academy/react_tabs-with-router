import { Outlet, NavLink } from 'react-router-dom';

const getLinkClass = ({ isActive }: { isActive: boolean }) => {
  return isActive ? 'navbar-item is-active' : 'navbar-item';
};

const getLinkStyle = ({ isActive }: { isActive: boolean }) => ({
  color: isActive ? 'red' : '',
});

export const App = () => {
  return (
    <>
      <nav data-cy="Nav" className="navbar is-light px-3">
        <div className="navbar-brand">
          <NavLink to="/" end className={getLinkClass} style={getLinkStyle}>
            Home
          </NavLink>

          <NavLink to="/tabs" className={getLinkClass} style={getLinkStyle}>
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
