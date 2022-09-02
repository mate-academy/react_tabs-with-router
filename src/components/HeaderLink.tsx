import classNames from 'classnames';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
  to: string;
  linkName: string;
};

export const HeaderLink: FC<Props> = ({ to, linkName }) => {
  return (
    <div className="navbar-brand">
      <NavLink
        to={to}
        className={({ isActive }) => classNames(
          'navbar-item', { 'is-active': isActive },
        )}
      >
        {linkName}
      </NavLink>
    </div>
  );
};
