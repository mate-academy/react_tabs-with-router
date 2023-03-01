import { NavLink } from 'react-router-dom';
import cn from 'classnames';

type Props = {
  to: string;
  text: string;
};

export const PageNavLink: React.FC<Props> = ({ to, text }) => (
  <NavLink
    className={({ isActive }) => cn('navbar-item',
      { 'is-active': isActive })}
    to={to}
  >
    {text}
  </NavLink>
);
