import classNames from 'classnames';
import { FC, memo } from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
  to: string,
  text: string,
};

export const NavigationLink: FC<Props> = memo(({ to, text }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => classNames(
        'navbar-item',
        { 'is-active': isActive },
      )}
    >
      {text}
    </NavLink>
  );
});
