import classNames from 'classnames';
import { FC } from 'react';
import { NavLink, To } from 'react-router-dom';

interface Props {
  to: To;
  title: string;

}
export const CustomLink: FC<Props> = ({ to, title }) => (
  <NavLink
    to={to}
    className={
      args => classNames('navbar-item', { 'is-active': args.isActive })
    }
  >
    {title}
  </NavLink>
);
