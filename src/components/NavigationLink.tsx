import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { FC } from 'react';

type Props = {
  link: string;
  text: string;
};

export const NavigationLink: FC<Props> = ({ link, text }) => {
  return (
    <NavLink
      to={link}
      className={({ isActive }) => classNames(
        'navbar-item', { 'is-active': isActive },
      )}
    >
      {text}
    </NavLink>
  );
};
