import classNames from 'classnames';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
  to: string;
  content: string;
};

export const PageNavigation: FC<Props> = ({ to, content }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => classNames(
        'navbar-item',
        { 'is-active': isActive },
      )}
    >
      {content}
    </NavLink>
  );
};
