import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

type Props = {
  to: string;
  name: string;
};

export const NavBarLink: React.FC<Props> = ({ to, name }) => (
  <NavLink
    className={({ isActive }) => (
      classnames('navbar-item', {
        isActive,
      })
    )}
    to={to}
  >
    {name}
  </NavLink>
);
