import classNames from 'classnames';
import { NavLink, Outlet } from 'react-router-dom';

const getLink = ({ isActive }: { isActive: boolean }) => {
  return classNames('navbar-item', { 'is-active': isActive });
};

export const Main = () => {
  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" className={getLink}>
              Home
            </NavLink>
            <NavLink to="/tabs" className={getLink}>
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
