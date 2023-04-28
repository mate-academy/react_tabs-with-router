import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

type Props = {
  url: string,
  title: string,
};

export const PageNavLink: React.FC<Props> = ({ url, title }) => (
  <NavLink
    to={url}
    className={({ isActive }) => classNames('navbar-item', {
      'is-active': isActive,
    })}
  >
    {title}
  </NavLink>
);
