import { NavLink } from 'react-router-dom';
import cn from 'classnames';

type Props = {
  to: string,
  content: string,
};

export const NavLinkComponent: React.FC<Props> = ({ to, content }) => (
  <NavLink
    to={`${to}`}
    className={({ isActive }) => cn(
      'navbar-item',
      { 'is-active': isActive },
    )}
  >
    {content}

  </NavLink>
);
