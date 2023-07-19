import classNames from 'classnames';
import { FC, useCallback } from 'react';
import { Outlet, NavLink } from 'react-router-dom';

export const App: FC = () => {
  const getLinkClasses = useCallback(({ isActive }: { isActive: boolean }) => {
    return classNames('navbar-item', {
      'is-active': isActive,
    });
  }, []);

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" className={getLinkClasses}>
              Home
            </NavLink>

            <NavLink to="/tabs" className={getLinkClasses}>
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
