import { FC, memo } from 'react';
import { NavLink, To } from 'react-router-dom';
import cn from 'classnames';

type Props = {
  to: To;
  textToDisplay: string;
};

export const TemplateNavLink: FC<Props> = memo(({ to, textToDisplay }) => (
  <NavLink
    to={to}
    className={({ isActive }) => cn('navbar-item', { 'is-active': isActive })}
  >
    {textToDisplay}
  </NavLink>
));
