import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

type Props = {
  title: string,
  link: string,
};

export const NavigationLink: React.FC<Props> = ({ title, link }) => {
  return (
    <NavLink
      to={link}
      className={
        ({ isActive }) => classNames(
          'navbar-item',
          { 'is-active': isActive },
        )
      }
    >
      {title}
    </NavLink>
  );
};
