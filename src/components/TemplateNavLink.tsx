import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

type Props = {
  to: string,
  textToDisplay: string,
};

export const TemplateNavLink: FC<Props> = ({ to, textToDisplay }) => (
  <NavLink
    to={to}
    className={({ isActive }) => cn('navbar-item', { 'is-active': isActive })}
  >
    {textToDisplay}
  </NavLink>
);
