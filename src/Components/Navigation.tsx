import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const setIsActive: (arg: { isActive: boolean }) => string = (
    { isActive },
  ) => classNames('navbar-item',
    { 'is-active': isActive });

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className={setIsActive}>
            Home
          </NavLink>
          <NavLink to="tabs" className={setIsActive}>
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
