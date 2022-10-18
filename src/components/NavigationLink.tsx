import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

type Props = {
  to: string;
  linkText: string;
};

export const NavigationLink: React.FC<Props> = ({ to, linkText }) => (
  <NavLink
    to={to}
    className={({ isActive }) => classNames(
      'navbar-item',
      { 'is-active': isActive },
    )}
  >
    {linkText}
  </NavLink>
);
