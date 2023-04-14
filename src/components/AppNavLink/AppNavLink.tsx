import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

interface Props {
  to: string;
  text: string;
}

export const AppNavLink: React.FC<Props> = ({ to, text }) => (
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
