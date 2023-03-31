import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

type Props = {
  to: string,
  linkname:string,
};

export const NavItem: React.FC<Props> = ({ to, linkname }) => (
  <NavLink
    to={to}
    className={
      ({ isActive }) => classNames(
        'navbar-item', { 'is-light': isActive },
      )
    }
  >
    {linkname}

  </NavLink>
);
