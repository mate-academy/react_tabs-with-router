import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

type TProps = {
  to: string;
  title: string;
};

export const PageNavLink: React.FC<TProps> = ({ to, title }) => (
  <NavLink
    to={to}
    className={({ isActive }) => classNames(
      'navbar-item',
      {
        'is-active': isActive,
      },
    )}
  >
    {title}
  </NavLink>
);
