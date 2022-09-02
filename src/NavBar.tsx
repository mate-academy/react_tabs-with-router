import React from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

interface Props {
  link: string,
  title: string,
}

export const NavBar: React.FC<Props> = (props) => {
  const { link, title } = props;

  return (
    <NavLink
      className={({ isActive }) => cn(
        'navbar-item',
        { 'has-background-grey-lighter': isActive },
      )}
      to={link}
    >
      {title}
    </NavLink>
  );
};
