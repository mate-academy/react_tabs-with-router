import cn from 'classnames';
import { NavLink } from 'react-router-dom';

interface Props {
  to: string,
  text: string,
}

export const PageNavLink: React.FC<Props> = ({ to, text }) => (
  <NavLink
    className={({ isActive }) => cn('navbar-item', {
      'is-active': isActive,
    })}
    to={to}

  >
    {text}
  </NavLink>
);
