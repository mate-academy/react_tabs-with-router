import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

export type Props = {
  to: string,
  name: string,
};

export const NavigationLink: React.FC<Props> = ({ to, name }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => classNames('navbar-item', {
        'is-active': isActive,
      })}
    >
      {name}
    </NavLink>
  );
};
