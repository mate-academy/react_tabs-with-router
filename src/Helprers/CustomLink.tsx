import { FC } from 'react';
import cn from 'classnames';
import { NavLink, To } from 'react-router-dom';

interface Props {
  to: To;
  title: string,
}

export const CustomLink: FC<Props> = ({ to, title }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (cn('navbar-item', {
        'is-active': isActive,
      }))}
    >
      {title}
    </NavLink>
  );
};
