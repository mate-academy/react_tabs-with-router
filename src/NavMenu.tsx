import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

const getLinkClass = ({ isActive }: { isActive: boolean }) => classNames(
  'navbar-item', { 'is-active': isActive },
);

const getLinkStyle = ({ isActive }: { isActive: boolean }) => (
  { color: isActive ? 'red' : '' }
);

export const NavMenu = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink
            to="/"
            className={getLinkClass}
            style={getLinkStyle}
          >
            Home

          </NavLink>
          <NavLink
            to="/tabs"
            className={getLinkClass}
            style={getLinkStyle}
          >
            Tabs

          </NavLink>
        </div>
      </div>
    </nav>
  );
};
