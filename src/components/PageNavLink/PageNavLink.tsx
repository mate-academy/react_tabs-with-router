import { NavLink } from 'react-router-dom';
import cn from 'classnames';

interface Props {
  to: string,
  text: string,
}

export const PageNavLink: React.FC<Props> = ({
  to,
  text,
}) => (
  <NavLink
    className={({ isActive }) => cn('navbar-item', { isActive })}
    to={to}
  >
    {text}
  </NavLink>

);
