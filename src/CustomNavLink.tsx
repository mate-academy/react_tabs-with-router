import React, { memo } from 'react';
import { NavLink, To } from 'react-router-dom';
import classNames from 'classnames';

interface Props {
  to: To,
  title: string
}

export const CustomNavLink: React.FC<Props> = memo((props) => {
  const {
    to,
    title,
  } = props;

  return (
    <NavLink
      to={to}
      className={(classNameArgs) => classNames(
        'navbar-item',
        { 'is-active': classNameArgs.isActive },
      )}
    >
      {title}
    </NavLink>
  );
});
