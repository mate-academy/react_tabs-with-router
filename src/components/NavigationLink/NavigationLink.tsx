import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

type Props = {
  url: string,
  title: string,
};

export const NavigationLink : React.FC<Props> = ({ url, title }) => (
  <NavLink
    className={({ isActive }) => classNames(
      'navbar-item',
      { 'is-active': isActive },
    )}
    to={`${url}`}
  >
    {title}
  </NavLink>
);
