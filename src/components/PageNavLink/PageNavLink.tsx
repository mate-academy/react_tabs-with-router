import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

type Props = {
  to: string;
  name: string;
};

export const PageNavLink: FC<Props> = ({ to, name }) => {
  const handlerActiveLink = (isActive: boolean) => {
    return cn('navbar-item', {
      'is-active': isActive,
    });
  };

  return (
    <NavLink
      to={to}
      className={({ isActive }) => handlerActiveLink(isActive)}
    >
      {name}
    </NavLink>
  );
};
