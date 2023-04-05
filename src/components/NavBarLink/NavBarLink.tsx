import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

interface Props {
  to: string,
  title: string,
}

export const NavBarLink: FC<Props> = (props) => {
  const { to, title } = props;

  return (
    <NavLink
      to={to}
      className={({ isActive }) => cn('navbar-item', {
        'is-active': isActive,
      })}
    >
      {title}
    </NavLink>
  );
};
