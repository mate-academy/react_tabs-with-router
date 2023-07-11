import cn from 'classnames';
import { NavLink, To } from 'react-router-dom';

type Props = {
  to: To,
  text: string,
};

export const HeaderNavLink: React.FC<Props> = ({ to, text }) => (
  <NavLink
    className={({ isActive }) => cn(
      'navbar-item', {
        'is-active': isActive,
      },
    )}
    to={to}
  >
    {text}
  </NavLink>
);
