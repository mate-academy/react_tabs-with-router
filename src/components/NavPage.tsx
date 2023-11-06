import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

const getLinkClass = ({ isActive } : { isActive: boolean }) => {
  return classNames('navbar-item', { 'is-active': isActive });
};

export const NavPage = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className={getLinkClass} data-cy="Nav">
            Home
          </NavLink>

          <NavLink to="/tabs" className={getLinkClass} data-cy="Nav">
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
