import cn from 'classnames';
import { FC } from 'react';
import { NavLink, To } from 'react-router-dom';

interface Props {
  to: To;
  title: string;
}

export const CustomLink: FC<Props> = ({ to, title }) => {
  return (
    <NavLink
      to={to}
      className={
        (classNameArgs) => cn(
          'navbar-item', { 'is-active': classNameArgs.isActive },
        )
      }
    >
      {title}
    </NavLink>
  );
};
