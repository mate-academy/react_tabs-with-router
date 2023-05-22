import classNames from 'classnames';
import { FC, memo } from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
  to: string;
  text: string;
};

export const NavigationPage: FC<Props> = memo(({ to, text }) => {
  return (
    <NavLink
      className={({ isActive }) => classNames('navbar-item', {
        'is-active': isActive,
      })}
      to={to}
    >
      {text}
    </NavLink>
  );
});
