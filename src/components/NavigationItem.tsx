import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

type Props = {
  to: string;
  content: string;
};

export const NavigationItem: React.FC<Props> = ({
  to,
  content,
}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => classNames(
        'navbar-item',
        { 'is-active': isActive },
      )}
    >
      {content}
    </NavLink>
  );
};
