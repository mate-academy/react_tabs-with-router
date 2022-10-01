import { NavLink } from 'react-router-dom';
import className from 'classnames';

type Props = {
  to: string,
  text: string
};

export const PageNavLink: React.FC<Props> = ({ to, text }) => {
  return (
    <NavLink
      className={({ isActive }) => className(
        'navbar-item', { 'is-active': isActive },
      )}
      to={to}
    >
      {text}
    </NavLink>
  );
};
