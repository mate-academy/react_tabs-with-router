import React, { memo } from 'react';
import cn from 'classnames';

import { NavLink } from 'react-router-dom';

type Props = {
  to: string;
  title: string;
};

export const NavigationLink: React.FC<Props> = memo(({ to, title }) => (
  <NavLink
    to={to}
    className={
      ({ isActive }) => cn(
        'navbar-item',
        { 'has-background-grey-lighter is-active': isActive },
      )
    }
  >
    {title}
  </NavLink>
));
