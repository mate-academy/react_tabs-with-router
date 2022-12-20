import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

interface Props {
  to: string,
  title: string,
}

export const PageNavLink: React.FC<Props> = ({ to, title }) => (
  <NavLink
    className={({ isActive }) => classNames(
      'navbar-item',
      { 'is-active': isActive },
    )}
    to={to}
  >
    {title}
  </NavLink>
);
