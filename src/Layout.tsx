import classNames from 'classnames';
import { NavLink, Outlet } from 'react-router-dom';

const getLinkClass = ({ isActive }: { isActive: boolean }) => {
  return classNames('navbar-item', {
    'is-active': isActive,
  });
};

export const Layout = () => (
  <>
    <nav
      data-cy="Nav"
      className="navbar is-light is-fixed-top is-mobile has-shadow"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className={getLinkClass}>Home</NavLink>
          <NavLink to="/tabs" className={getLinkClass}>Tabs</NavLink>
        </div>
      </div>
    </nav>

    <Outlet />
  </>
);
