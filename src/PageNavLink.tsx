import classNames from 'classnames';
import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  to: string;
  text: string;
}

export const PageNavLink: FC<Props> = React.memo((props) => {
  const { to, text } = props;

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
