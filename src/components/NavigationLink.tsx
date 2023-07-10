import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

type Props = {
  to: string,
  title: string,
};

export const NavigationLink: React.FC<Props> = ({ to, title }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => classNames(
        'navbar-item',
        { 'is-active': isActive },
      )}
    >
      {title}
    </NavLink>
  );
};
