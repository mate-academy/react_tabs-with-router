/* eslint-disable no-console */
import { memo, useMemo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import './Navigation.scss';

export const Navigation = memo(() => {
  const { pathname } = useLocation();
  const folder = useMemo(() => {
    return pathname.replace('/', ' ').split('/')[0].trim();
  }, [pathname]);

  return (
    <div className="navigation">
      <NavLink
        to="/home"
        className={classNames(
          'navigation__link',
          { active: folder === 'home' },
        )}
      >
        Home
      </NavLink>

      <NavLink
        to="/cards/info"
        className={classNames(
          'navigation__link',
          { active: folder === 'cards' },
        )}
      >
        Tabs
      </NavLink>
    </div>
  );
});
