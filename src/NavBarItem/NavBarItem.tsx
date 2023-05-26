import cn from 'classnames';
import { FC, memo } from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  to: string;
  text:string;
}

export const NavBarItem: FC<Props> = memo(({ to, text }) => {
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
