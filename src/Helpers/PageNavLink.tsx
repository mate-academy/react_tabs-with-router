import cn from 'classnames';
import { memo } from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
  to: string,
  text: string,
};

export const PageNavLink: React.FC<Props> = memo(({ to, text }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => cn('navbar-item', {
        'is-active': isActive,
      })}
    >
      {text}
    </NavLink>
  );
});
