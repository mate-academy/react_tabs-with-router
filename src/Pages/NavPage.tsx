import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

const getLinckClass = (
  { isActive }: { isActive: boolean },
) => classNames('navbar-item', {
  'is-active': isActive,
});

export const NavPage = () => {
  return (
    <nav
      data-cy="Nav"
      className="navbar is-light is-fixed-top is-mobile has-shadow"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className={getLinckClass} data-cy="Nav">
            Home
          </NavLink>
          <NavLink to="/tabs" className={getLinckClass} data-cy="Nav">
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
