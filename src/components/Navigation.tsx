import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { NavTab } from '../types/NavTab';

export const Navigation = () => {
  const getLinkClass = ({ isActive }: { isActive: boolean }) => {
    return classNames('navbar-item', { 'is-active': isActive });
  };

  return (
    <nav
      className={classNames(
        'navbar',
        'is-light',
        'is-fixed-top',
        'is-mobile',
        'has-shadow',
        'has-navbar-fixed-top',
      )}
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink
            to="/"
            className={getLinkClass}
          >
            {NavTab.home}
          </NavLink>

          <NavLink
            to="/tabs"
            className={getLinkClass}
          >
            {NavTab.tabs}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
