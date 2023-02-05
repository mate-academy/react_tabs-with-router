import cn from 'classnames';
import { FC } from 'react';
import { NavLink, To } from 'react-router-dom';

interface Props {
  to: To;
  title: string;
}

export const PageNavLink: FC<Props> = (props) => {
  const { to, title } = props;

  return (
    <NavLink
      to={to}
      className={(classNameArgs) => cn(
        'navbar-item',
        { 'is-active': classNameArgs.isActive },
      )}
    >
      {title}
    </NavLink>
  );
};
