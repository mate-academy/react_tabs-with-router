import { NavLink } from 'react-router-dom';
import cn from 'classnames';

type Props = {
  to: string,
  title:string;
};

export const NavigationLink:React.FC<Props> = ({ to, title }) => (
  <NavLink
    to={to}
    className={({ isActive }) => cn('navbar-item',
      { 'is-active': isActive })}
  >
    {title}
  </NavLink>
);
