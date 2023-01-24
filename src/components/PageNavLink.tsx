import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

export type Props = {
  to: string;
  text: string;
};

export const PageNavLink: React.FC<Props> = ({ to, text }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => classNames(
        'navbar-item', { 'is-active': isActive },
      )}
    >
      {text}
    </NavLink>
  );
};
