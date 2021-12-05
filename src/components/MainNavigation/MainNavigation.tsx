import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import './MainNavigation.scss';

type Props = {
  className?: string;
};

export const MainNavigation: React.FC<Props> = ({ className }) => {
  return (
    <nav className={classNames('MainNavigation', className)}>
      <ul className="MainNavigation__list">
        <li className="MainNavigation__item">
          <NavLink
            to="/"
            className={({ isActive }) => classNames('MainNavigation__link', { 'MainNavigation__link--active': isActive })}
          >
            Home
          </NavLink>
        </li>

        <li className="MainNavigation__item">
          <NavLink
            to="/tabs"
            className={({ isActive }) => classNames('MainNavigation__link', { 'MainNavigation__link--active': isActive })}
          >
            Tabs
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
