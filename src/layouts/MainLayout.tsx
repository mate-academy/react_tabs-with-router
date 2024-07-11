import { NavLink, Outlet } from 'react-router-dom';
import cn from 'classnames';

import { HIGH_LEVEL_NAV_CONFIG } from '../utils/config';

export const MainLayout = () => {
  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            {HIGH_LEVEL_NAV_CONFIG.map(({ title, to, key }) => (
              <NavLink
                key={key}
                to={to}
                className={({ isActive }) =>
                  cn('navbar-item', {
                    'is-active': isActive,
                  })
                }
              >
                {title}
              </NavLink>
            ))}
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
