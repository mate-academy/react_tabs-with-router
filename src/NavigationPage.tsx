import { FC, memo } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

type Props = {
  to: string;
  text: string
};

export const PageNavigation: FC<Props> = memo(({ to, text }) => (
  <NavLink
    to={to}
    className={
      ({ isActive }) => cn(
        'navbar-item',
        { 'has-background-grey-lighter is-active': isActive },
      )
    }
  >
    {text}
  </NavLink>
));
