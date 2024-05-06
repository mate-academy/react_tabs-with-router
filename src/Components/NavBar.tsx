import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

const getActiveClass = ({ isActive }: { isActive: boolean }) =>
  classNames('navbar-item', {
    'is-active': isActive,
  });

const NavBar = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className={getActiveClass}>
            Home
          </NavLink>
          <NavLink to="/tabs" className={getActiveClass}>
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
