import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { NavList } from '../../types/NavList';

type Props = {
  navList: NavList[],
};

export const Header: React.FC<Props> = ({ navList }) => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          {navList.map(({ href, title }) => (
            <NavLink
              to={href}
              key={href}
              className={({ isActive }) => cn('navbar-item', {
                'is-active': isActive,
              })}
            >
              {title}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};
