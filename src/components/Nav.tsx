import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { AppRoute } from '../enums/AppRouts';

const getLinkClass = ({ isActive } : { isActive: boolean }) => (
  classNames('navbar-item', {
    'is-active': isActive,
  })
);

export const Nav = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to={AppRoute.ROOT} className={getLinkClass}>
            Home
          </NavLink>

          <NavLink to={AppRoute.TABS} className={getLinkClass}>
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
