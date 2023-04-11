import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

type Props = {
  to: string;
  title: string;
};

export const PageNavigationLink: React.FC<Props> = ({ to, title }) => (
  <NavLink
    to={to}
    className={({ isActive }) => classNames(
      'navbar-item', { 'is-active': isActive },
    )}
  >
    {title}
  </NavLink>
);
