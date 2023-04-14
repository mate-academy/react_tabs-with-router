import { FC } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

type Props = {
  link: string,
  name: string,
};

export const NavigationLink: FC<Props> = ({ link, name }) => {
  return (
    <NavLink
      to={link}
      className={({ isActive }) => classNames(
        'navbar-item',
        { 'is-active': isActive },
      )}
    >
      {name}
    </NavLink>
  );
};
