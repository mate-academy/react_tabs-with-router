import classNames from 'classnames';
import { FC } from 'react';
import { NavLink, To } from 'react-router-dom';

interface Props {
  to: To;
  title: string;
}

export const NavLinkPage: FC<Props> = (props) => {
  const { to, title } = props;

  return (
    <NavLink
      to={to}
      className={(args) => classNames(
        'navbar-item',
        { 'is-active': args.isActive },
      )}
    >
      {title}
    </NavLink>
  );
};
